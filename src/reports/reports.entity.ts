import { User } from '../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;

  @ManyToMany(() => User, (user) => user.reports)
  user: User;
}

/**
 * CREATING AN ENTITY
 * 1. Create an entity file and create a class with the @Entity() decorator, that
 *    lists all the properties youe rntity will have.
 * 2. Connect entity to its parent module. This creates a repository.
 * 3. COnnect the entity to the root connection in the app module.
 */
