/* GENERATED BY quicktype.ts, DO NOT EDIT */
/* eslint-disable */
namespace ArkEnemyJP {
  export interface ArkEnemyJP {
    level: number;
    enemyData: EnemyData;
  }

  export interface EnemyData {
    name: Description;
    description: Description;
    prefabKey: Description;
    attributes: Attributes;
    lifePointReduce: LevelType;
    levelType: LevelType;
    rangeRadius: LevelType;
    numOfExtraDrops: LevelType;
    talentBlackboard: Blackboard[] | null;
    skills: Skill[] | null;
    spData: SPData | null;
  }

  export interface Attributes {
    maxHp: LevelType;
    atk: LevelType;
    def: LevelType;
    magicResistance: LevelType;
    cost: LevelType;
    blockCnt: LevelType;
    moveSpeed: LevelType;
    attackSpeed: LevelType;
    baseAttackTime: LevelType;
    respawnTime: LevelType;
    hpRecoveryPerSec: LevelType;
    spRecoveryPerSec: LevelType;
    maxDeployCount: LevelType;
    massLevel: LevelType;
    baseForceLevel: LevelType;
    tauntLevel: LevelType;
    stunImmune: Immune;
    silenceImmune: Immune;
    sleepImmune: Immune;
    frozenImmune: Immune;
    levitateImmune: Immune;
  }

  export interface LevelType {
    m_defined: boolean;
    m_value: number;
  }

  export interface Immune {
    m_defined: boolean;
    m_value: boolean;
  }

  export interface Description {
    m_defined: boolean;
    m_value: null | string;
  }

  export interface Skill {
    prefabKey: string;
    priority: number;
    cooldown: number;
    initCooldown: number;
    spCost: number;
    blackboard: Blackboard[] | null;
  }

  export interface Blackboard {
    key: string;
    value: number;
    valueStr: null | string;
  }

  export interface SPData {
    spType: number;
    maxSp: number;
    initSp: number;
    increment: number;
  }
}
