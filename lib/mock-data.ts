export type ProjectRole = "owner" | "shared";

export interface Project {
  id: string;
  name: string;
  slug: string;
  role: ProjectRole;
  updatedAt: string;
}

export const mockOwnedProjects: Project[] = [
  {
    id: "p_1",
    name: "Payment Gateway",
    slug: "payment-gateway",
    role: "owner",
    updatedAt: "2 hours ago",
  },
  {
    id: "p_2",
    name: "User Authentication",
    slug: "user-authentication",
    role: "owner",
    updatedAt: "1 day ago",
  },
];

export const mockSharedProjects: Project[] = [
  {
    id: "p_3",
    name: "Inventory System",
    slug: "inventory-system",
    role: "shared",
    updatedAt: "3 days ago",
  },
];
