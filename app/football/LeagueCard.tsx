import Image from "next/image"

interface TeamInfo {
    id: number;
    name: string;
    logo: string;
  }
  
  interface MatchDetails {
    rank: number;
    team: TeamInfo;
    points: number;
    all: {
      played: number;
      win: number;
      draw: number;
      lose: number;
      goals: {
        for: number;
        against: number;
      };
    };
  }

export async function getLeagueTable() {
    const res = await fetch('https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=39', {
        headers: {
            'X-RapidAPI-Key': '19978d8ad8msh966959f511c0cedp1fbbacjsnd4ed69eb1e78',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    })

    if (!res.ok) {
        // throw new Error('Failed to fetch data')
        console.log(res);
    }

    return res.json()
}

export default async function LeagueCard() {
    const data = await getLeagueTable();
    return (
        <div className='w-full text-xs space-y-2 2xl:space-y-2.5 rounded-xl py-3 px-2.5 2xl:p-4 bg-black'>
            {/* this is heading  */}
            <div className='flex items-center mb-2.5'>
                <div className='w-1/2'>
                    <p>Team</p>
                </div>

                <div className='w-1/2 grid justify-items-center grid-cols-5'>
                    <p>MP</p>
                    <p>W</p>
                    <p>D</p>
                    <p>L</p>
                    <p>Pts</p>
                </div>
            </div>

            {/* this is another divs  */}
            {data.response[0].league.standings[0]?.slice(0, 20).map((match: MatchDetails) => (
            <div key={match.team.id} className='flex items-center font-light'>
                <div className='w-1/2 flex items-center gap-1'>
                <p>{match.team.name}</p> {/* Corrected from match.name to match.team.name */}
                </div>

                <div className='w-1/2 grid justify-items-center grid-cols-6'>
                <p>{match.all.played}</p>
                <p>{match.all.win}</p>
                <p>{match.all.draw}</p>
                <p>{match.all.lose}</p>
                <p>{match.points}</p>
                </div>
            </div>
            ))}
        </div>
    )
}