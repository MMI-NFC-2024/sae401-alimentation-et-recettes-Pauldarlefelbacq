export function TpsTotal (a:number, b:number) {
    return a + b;
}

export function formatHeure (tps: number){
    if (tps >= 60)
    {
        return (Math.round((tps / 60) * 10)) /10;
    }
    return tps;
}

export function checkHeure (tps: number){
    return tps > 60;
}