export interface Member {
    name: string;
    email: string;
    age: number;
    gender: "male" | "female";
    nationality: string; // kode negara 
    address: string;
    img: string;
    registeredDate: string; // tanggal pendaftaran
}
