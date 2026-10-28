import { IsString, IsNotEmpty, IsUUID, IsOptional } from 'class-validator';
export class CreateShopDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsOptional()
  @IsUUID()
  ownerId: string;
}
