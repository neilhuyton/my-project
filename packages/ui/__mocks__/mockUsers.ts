import bcrypt from "bcryptjs";

export interface MockUser {
  id: string;
  email: string;
  password: string;
  verificationToken: string | null;
  isEmailVerified: boolean;
  resetPasswordToken: string | null;
  resetPasswordTokenExpiresAt: string | null;
  createdAt: string;
  updatedAt: string;
  refreshToken: string | null;
}

export const mockUsers: MockUser[] = [
  {
    id: "test-user-1",
    email: "testuser@example.com",
    password: bcrypt.hashSync("password123", 10),
    verificationToken: null,
    isEmailVerified: true,
    resetPasswordToken: "123e4567-e89b-12d3-a456-426614174000",
    resetPasswordTokenExpiresAt: new Date(
      Date.now() + 3600 * 1000
    ).toISOString(),
    createdAt: "2025-08-16T10:40:39.214Z",
    updatedAt: "2025-08-16T10:40:39.214Z",
    refreshToken: "mock-refresh-token",
  },
];
