interface Role {
  name: string;
  localizedName: string;
}

export interface UserDto {
  id: string;
  username: string;
  role: Role;
  balance?: number;
  token?: string;
}
