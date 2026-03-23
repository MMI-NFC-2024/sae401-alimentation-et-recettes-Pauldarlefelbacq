import type { UsersResponse } from "../pocketbase-types";

export function TpsTotal (a:number, b:number) {
    return a + b;
}

export function formatHeure (tps: number){
    if (tps >= 60)
    {
        return (Math.round(tps / 60)) + (tps % 60) / 100 ;
    }
    return tps;
}

export function checkHeure (tps: number){
    return tps > 60;
}