import axios from "axios";

export async function fetchNationalityCodes(): Promise<Record<string, string>> {
    const res = await axios.get<Record<string, string>>("https://flagcdn.com/en/codes.json");
    return res.data; 
}
