import { gql } from "apollo-boost";

export const jobsMixin = {
  methods: {
    getJobs(type) {
      const getJobs = gql`
        query jobs($input: JobsInput) {
          jobs(input: $input) {
            id
            title
            slug
            commitment {
              id
              title
              slug
            }
            cities {
              name
            }
            countries {
              name
            }
            remotes {
              name
            }
            description
            applyUrl
            company {
              name
            }
          }
        }
      `;
      return this.$apollo.query({
        query: getJobs,
        variables: {
          type
        }
      });
    },

    getCompanies() {
      const getCompanies = gql`
        query companies {
          companies {
            id
            name
            slug
            websiteUrl
            logoUrl
            twitter
            jobs {
              id
              title
            }
          }
        }
      `;
      return this.$apollo.query({
        query: getCompanies
      });
    }
  }
};
