---
sidebar_position: 1
---

# Framing Process

## What Is Framing?

Framing is the process of **defining an engineering opportunity** that is relevant to a group of **stakeholders** using a set of **requirements**. 

Notable means of establishing requirements include: 
* **Conversations** with **stakeholders**, 
* **Reading Request For Proposals** (**RFPs**),
* **Studying reference designs**.

Although each source provides information regarding the requirements, the engineer almost always has to **reframe** and **rescope** the opportunity. This is necessary as the context in which requirements were created may be different or have changed. On the other hand, if the engineer has to frame an opportunity themselves, then the onus is on them to go through the aforementioned channels and develop a [suitable](my-website/docs/Framing/suitable-requirements.md) requirements model. 

## Stakeholder Engagement

Engagement with stakeholders is the bedrock of participatory design, a paradigm which I value.  It is necessary for understanding how a solution can impact stakeholders’ lived experiences and is usually achieved through conversations with them.

#### When And How To Use Stakeholder Engagement

Stakeholder engagement is best used to develop a requirements model during the framing process and for validating design ideas during the converging process. 

<!-- #### Advantages

* Provides **unique insights** on the opportunity.
* Access to **resources** or **background information**. 
* Builds **credibility** when framing and converging on solutions. -->

:::tip Advantages

* Provides **unique insights** on the opportunity.
* Access to **resources** or **background information**. 
* Builds **credibility** when framing and converging on solutions.

::: 


:::caution Limitations

* Individuals you converse with may **not be representative** of entire communities, who may also be your stakeholders.
* A **time investment** is needed for stakeholder engagements, which may delay other parts of the design process.
* **Mismanaged expectations** of the stakeholder and engineer’s role can impact relationships and reputations.

::: 

<!-- 
#### Limitations

* Individuals you converse with may **not be representative** of entire communities, who may also be your stakeholders.
* A **time investment** is needed for stakeholder engagements, which may delay other parts of the design process.
* **Mismanaged expectations** of the stakeholder and engineer’s role can impact relationships and reputations. -->

:::info Recommended Modifications

* **Take field notes.** Field notes document observations from a stakeholder engagement. If multiple teammates are present, having more than one person write this will provide a multiplicity of perspectives when reviewing the notes. 
* **Before a stakeholder interaction, do your research.** Study relevant secondary sources, have your own understanding of the opportunity and the community you are engaging with. This leads to a more productive engagement with the stakeholder that circumvents generalities and allows you to triangulate your findings with their experiences. .

:::



<!-- #### Recommended Modifications

* **Take field notes.** Field notes document observations from a stakeholder engagement. If multiple teammates are present, having more than one person write this will provide a multiplicity of perspectives when reviewing the notes. 
* **Before a stakeholder interaction, do your research.** Study relevant secondary sources, have your own understanding of the opportunity and the community you are engaging with. This leads to a more productive engagement with the stakeholder that circumvents generalities and allows you to triangulate your findings with their experiences.  -->

<!-- 
```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at `http://localhost:3000/my-react-page`.

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at `http://localhost:3000/my-markdown-page`.
 -->

<!-- Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar` -->

## Requirements Model

The requirements model details the **high level objectives** of a design, **metrics** that can measure the success of objectives, **criteria** that acts as the standard for how metrics are judged, and **constraints** that set bounds on what needs to be achieved. 

#### When And How To Use The Requirements Model

The requirements model is best used when framing an opportunity. When converging on a solution, the proposed designs should be measured against the requirements model as well.

:::tip Advantages
* It **acts as a template** by which the stakeholders’ and engineers requirements can be curated and presented.
* The structure of the model forces users to **thoroughly research and detail metrics, criteria and constraints for objectives** thereby making them more **measurable**.
:::

:::caution Limitations
* The **requirements model is** usually constructed in a **general** manner and does not seek to limit the solution space. However, this means some of the **requirements might be vague or insufficient** for creating an optimal design during the converging stage **when working with a specific design**.
:::

:::info Recommended Modifications
* Use the **toulmin model of argumentation** when justifying the prioritization of objectives as well as the selection of metrics, criteria and constraints.
* To ensure effective **communication of ideas**, present the requirements in an order that corresponds to the priorities of the design team and the stakeholders.
* Use the **principle of iterative design** and apply it to your requirements. This means revisit the requirements model after diverging and converging on a range of good solutions. Doing such a revision ensures the requirements are appropriate for the specific designs being produced and will allow for a better converging process.
:::