export type TDonation = {
    _id?: string;
    amount: number;
    category: string;
    description: string;
    image: string;
    title: string;
};


export type TDonorData = {
    _id: string;
    image: string;
    name: string;
    email: string;
    amount: number;
};