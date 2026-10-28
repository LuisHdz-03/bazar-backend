import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  street: string;
  city: string;
  state: string;
  postalCode: string;

  @IsUUID()
  @IsNotEmpty()
  shopId: string;
}
