<template>
    <div>{{ role }}</div>
</template>

<script>
export default {
    data() {
        return {
            role: null
        }
    },
    created() {
        this.loadRole(roleID);
    },
    methods: {
        loadRole(roleID) {
            this.$apollo.query({
                    query: require("../../graphql/articles/article.gql"),
                    variables: {
                        roleID: roleID
                    }
                })
                .then(response => {
                    this.role = response.data.name;
                });
        }
    }
};
</script>
