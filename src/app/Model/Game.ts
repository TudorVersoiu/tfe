import { MoveAnalysis } from './MoveAnalysis';
import { MoveList } from './MoveList';

export interface Game { 
    moves: string[];
    perf?: string;
    analysis?: MoveAnalysis[];
    analyzed?: Boolean;
    speed?: string;
    createdAt?: number;
    lastMoveAt?: number;
    winner?: boolean;
    ownerUserName?: String;
    ownerColor?: String;
}
