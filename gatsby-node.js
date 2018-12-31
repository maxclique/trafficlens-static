const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  // fetch raw data from the randomuser api
  const fetchPlans = () => axios.get(`https://api-prod.trafficlens.io/v1/plans/`);
  // await for results
  const res = await fetchPlans();
  // map into these results and create nodes

  res.data.map((plan, i) => {
    // Create your node object
    const { planUuid, name, amount, currency, isDefault, trialPeriodDays } = plan
    const planNode = {
      // Required fields
      id: planUuid,
      parent: `__SOURCE__`,
      internal: {
        type: `Plan`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      name,
      amount,
      currency,
      isDefault,
      trialPeriodDays,
      // etc...
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(planNode))
      .digest(`hex`);
    // add it to planNode
    planNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(planNode);
  });

  return;
}
