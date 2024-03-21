export type TDonation = {
    _id?: string;
    amount: number;
    category: string;
    description: string;
    image: string;
    title: string;
};

export type TComment = {
    _id: string;
    email: string;
    commenterName: string;
    comments: string;
    timestamp: string;
    image?: string;
    commenterImage?: string;
};


export type TDonorData = {
    _id: string;
    image: string;
    name: string;
    email: string;
    amount: number;
};



export type TVolunteer = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    image?: string;
};