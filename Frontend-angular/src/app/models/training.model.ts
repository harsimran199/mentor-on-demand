import { Technology } from "./technology.model";

export class Training{
    id: number;
    status: string;
    progress: number;
    fees: string;
    commissionAmount: number;
    rating: number;
    startDate: String;
    endDate: String;
    startTime: string;
    endTime: string;
    amountReceived: number;
    userId: number;
    mentorId: number;
    amountToMentor: number;
    technology:Technology=new Technology();
} 