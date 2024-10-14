import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;
}

/**
 * CREATING AN ENTITY
 * 1. Create an entity file and create a class with the @Entity() decorator, that
 *    lists all the properties youe rntity will have.
 * 2. Connect entity to its parent module. This creates a repository.
 * 3. COnnect the entity to the root connection in the app module.
 */
