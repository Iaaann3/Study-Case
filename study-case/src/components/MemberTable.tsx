import React from "react";
import { Member } from "../type";

interface MembersTableProps {
  members: Member[];
}

export function MembersTable({ members }: MembersTableProps) {
  return (
    <div className="overflow-y-auto max-h-[700px]">
      {members.map((m, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between py-6 px-4 min-h-[72px]"
        >
          <div className="flex items-center space-x-3 w-2/5">
            <img src={m.img} alt={m.name} className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium">{m.name}</p>
              <p className="text-sm text-gray-500">{m.email}</p>
            </div>
          </div>

          <div className="w-1/6 flex justify-center">
            <span className="block w-12 text-center ">{m.age}</span>
          </div>

          <div className="w-1/6 flex justify-center">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                m.gender === "female"
                  ? "bg-pink-100 text-pink-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {m.gender}
            </span>
          </div>

          <div className="w-1/6 flex justify-center">
            <img
              src={`https://flagcdn.com/32x24/${m.nationality}.png`}
              srcSet={`https://flagcdn.com/64x48/${m.nationality}.png 2x, https://flagcdn.com/96x72/${m.nationality}.png 3x`}
              width="32"
              height="24"
              alt={m.nationality}
              className="inline-block"
            />
          </div>
          <div className="text-sm text-gray-500 w-2/4 truncate">
            {m.address}
          </div>
        </div>
      ))}
    </div>
  );
}
