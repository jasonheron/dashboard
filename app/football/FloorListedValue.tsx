async function getME() {
    const res = await fetch(
        "https://api-mainnet.magiceden.dev/v2/collections/the_prem/stats",
        {
            cache: "no-cache",
        }
    );

    return res.json();
}

export default async function FloorListedValue() {
    const data = await getME();
    return (
        <div className="text-lg">
            <p><span className="font-semibold ">Floor Price:</span>
                <span className=" font-medium">
                    {" "}
                    {data.floorPrice / 1000000000}{" "}
                </span>{" "}
                SOL &nbsp;

            </p>
            <p><span className="font-semibold ">Listed:</span>{" "}
                <span className=" font-medium">
                    {" "}
                    {data.listedCount}{" "}
                </span>
                / 3000</p>
        </div>
    );
}
