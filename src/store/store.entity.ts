/**
 * Filename    : store.entity.ts
 * Description : Contains store module related sql entities.
 *
 * Copyright (c) 2024 Jollibee Foods Corporation. All Rights Reserved.
 */

import { ObjectId } from "mongodb";
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from "typeorm";

//==============================================================================

@Entity({ name: "stores" })
export class Store {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  uid: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

//==============================================================================
