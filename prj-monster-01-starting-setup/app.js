const attackFormula = (max, min) =>
  Math.floor(Math.random() * (max - min)) + min;

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRoundUntilUse: 3,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRoundUntilUse !== 0;
    },
  },
  methods: {
    attackMonster() {
      if (this.currentRoundUntilUse > 0) this.currentRoundUntilUse--;
      const attackValue = attackFormula(12, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = attackFormula(15, 8);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRoundUntilUse = 3;
      const attackValue = attackFormula(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
  },
});

app.mount("#game");
