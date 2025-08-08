import { Member } from "../type";

export function countDifferentNationality(members: Member[]): number {
  const unique = new Set(members.map(m => m.nationality));
  return unique.size;
}

export function mostGender(members: Member[]): "male" | "female" | "equal" {
  const maleCount = members.filter(m => m.gender === "male").length;
  const femaleCount = members.filter(m => m.gender === "female").length;
  if (maleCount > femaleCount) return "male";
  if (femaleCount > maleCount) return "female";
  return "equal";
}

export function averageAge(members: Member[]): number {
  if (members.length === 0) return 0;
  const total = members.reduce((sum, m) => sum + m.age, 0);
  return Math.round(total / members.length);
}

export function averageMembership(members: Member[]): number {
  if (members.length === 0) return 0;
  const now = new Date();
  const totalYears = members.reduce((sum, m) => {
    const regDate = new Date(m.registeredDate);
    const diffMs = now.getTime() - regDate.getTime();
    const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
    return sum + diffYears;
  }, 0);
  return Math.round(totalYears / members.length);
}
