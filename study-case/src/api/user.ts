import axios from "axios";
import { Member } from "../type";

export async function fetchMembers(): Promise<Member[]> {
  const res = await axios.get<{ results: any[] }>(
    "https://randomuser.me/api/?results=25"
  );
  return res.data.results.map((user) => ({
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    age: user.dob.age,
    gender: user.gender,
    nationality: user.nat.toLowerCase(),
    address: `${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
    img: user.picture.medium,
    registeredDate: user.registered.date,
  }));
}
