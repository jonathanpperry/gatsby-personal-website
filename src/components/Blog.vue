<template>
  <div class="container">
    <div :key="item.key" v-for="item in articlesCollection">
      <h1>{{ item }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articlesCollection: []
    };
  },
  mounted() {
    const db = this.$firebase.firestore();
    db.collection("articles")
      .get()
      .then(snap => {
        const articlesCollection = [];
        let i = 0;
        snap.forEach(doc => {
          articlesCollection.push({ [i]: doc.data() });
          i++;
        });
        this.articlesCollection = articlesCollection;
        console.log(JSON.parse(JSON.stringify(articlesCollection)));
      });
  }
};
</script>

<style lang="scss">
</style>
