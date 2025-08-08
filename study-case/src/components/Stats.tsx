import React from "react";
import { FaFlag, FaVenus, FaMars, FaWalking, FaUsers } from "react-icons/fa";

interface StatsProps {
  differentNationality: number;
  mostGender: "male" | "female" | "equal";
  averageAge: number;
  averageMembership: number;
}

export function Stats({
  differentNationality,
  mostGender,
  averageAge,
  averageMembership,
}: StatsProps) {
  const genderIcon =
    mostGender === "female" ? (
      <FaVenus />
    ) : mostGender === "male" ? (
      <FaMars />
    ) : null;
  const genderLabel =
    mostGender === "equal"
      ? "Equal Male & Female"
      : mostGender.charAt(0).toUpperCase() + mostGender.slice(1);

  const statsData = [
    {
      label: "Different Nationality",
      value: differentNationality,
      icon: <FaFlag />,
    },
    { label: "Most Gender", value: genderLabel, icon: genderIcon },
    { label: "Average Age", value: `~${averageAge}`, icon: <FaWalking /> },
    {
      label: "Average Membership",
      value: `~${averageMembership} year`,
      icon: <FaUsers />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      {statsData.map(({ label, value, icon }, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between bg-gray-50 rounded-xl p-4 shadow-sm"
        >
          <div>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-gray-500 text-sm">{label}</p>
          </div>
          <div className="text-5xl text-gray-600">{icon}</div>
        </div>
      ))}
    </div>
  );
}
