import React, { useEffect, useState } from "react";
import { fetchMembers } from "./api/user";
import { fetchNationalityCodes } from "./api/nationality";
import { countDifferentNationality, mostGender, averageAge, averageMembership } from "./utils/calculations";
import { Stats } from "./components/Stats";
import { MembersTable } from "./components/MemberTable";
import { Member } from "./type";

export default function App() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        // fetch nationality codes dan members, nationalityCodes tidak dipakai di UI, hanya sebagai contoh fetch
        const [membersData, nationalityCodes] = await Promise.all([
          fetchMembers(),
          fetchNationalityCodes(),
        ]);
        setMembers(membersData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-5xl">
        <h2 className="text-lg font-bold mb-4">Member Dashboard</h2>

        <Stats
          differentNationality={countDifferentNationality(members)}
          mostGender={mostGender(members)}
          averageAge={averageAge(members)}
          averageMembership={averageMembership(members)}
        />

        <MembersTable members={members} />
      </div>
    </div>
  );
}
