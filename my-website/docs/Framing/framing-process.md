---
sidebar_position: 1
id: framing-process
title: Framing Process
sidebar_label: Framing Process
---

# Framing Process

## What Is Framing?

Framing is the process of **defining an engineering opportunity** that is relevant to a group of **stakeholders** using a set of **requirements**. 

Notable means of establishing requirements include: 
* **Conversations** with **stakeholders**, 
* **Reading Request For Proposals** (**RFPs**),
* **Studying reference designs**.

Although each source provides information regarding the requirements, the engineer almost always has to **reframe** and **rescope** the opportunity. This is necessary as the context in which requirements were created may be different or have changed. On the other hand, if the engineer has to frame an opportunity themselves, then the onus is on them to go through the aforementioned channels and develop a [**suitable**](./Subtopics/suitable-requirements) requirements model. 

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

## Scoping 

Scoping is the process through which a design challenge is defined. It is an important component of successfully framing an opportunity. 

#### When And How To Use Scoping

Scoping is done at the beginning of the framing process after an opportunity has been identified. Scoping is usually conducted by asking a series of questions and trying to establish a prioritization. Key questions to ask include:

* If there are a range of sub-challenges associated with an opportunity, is there one that should be focused on? Is there overlap between challenges and can they be merged? Or do they instead need to be separated?

* Which DfXs are being considered and prioritized?

* Who are the relevant stakeholders to this opportunity? Are they primary or secondary stakeholders? What is their stake? Who will you try to engage with and involve in the engineering design process?


:::tip Advantages
* Challenges can be scoped to a more **manageable level** given time and resource constraints.
* Defining a scope helps with **identifying stakeholders**, **framing requirements** that can be met and eventually **measuring the solutions** within a context as well. 
:::

:::caution Limitations
* It is **difficult to determine the best scope** at the beginning of a design project when there is the most **limited information**. 
:::

:::info Recommended Modifications
* Go back and reevaluate the scope of the project frequently while still in the framing phase. 
* Stakeholders often give insight into how the scope of a design project can be expanded or contracted. Incorporate this perspective when determining a scope or if you are too far into the design process and there are time constraints, note these down as recommendations for future work.
* A heuristic for successful scoping is whether the types of solutions that are being generated are all very similar during diverging. If this is the case, then it may be necessary to rescope as the solution space is highly constrained.
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
* Use the **Toulmin model of argumentation** when justifying the prioritization of objectives as well as the selection of metrics, criteria and constraints.
* To ensure effective **communication of ideas**, present the requirements in an order that corresponds to the priorities of the design team and the stakeholders.
* Use the **principle of iterative design** and apply it to your requirements. This means revisit the requirements model after diverging and converging on a range of good solutions. Doing such a revision ensures the requirements are appropriate for the specific designs being produced and will allow for a better converging process.
:::

## Toulmin Model Of Argumentation

The Toulmin model of argumentation decomposes arguments into six constituent parts. These include the claim, grounds, warrant, qualifier, rebuttal and backing of an argument. The figure above outlines what each of these components means.

#### When And How To Use The Toulmin Model Of Argumentation

The Toulmin model of argumentation is best used to articulate engineering claims. This can be done in reports and documents such as a RFP where a situation is being framed, it can be used to justify the prioritization of DfXs (Design for Xs) and can also be used to structure claims made in presentations. Examples of where the Toulmin model of argumentation was used to construct engineering claims includes the Design Brief written for Praxis I and the RFP written in Praxis II. 

:::tip Advantages
* The model allows users to consider **each part of an argument independently** and then understand how they **work in concert**. 
* The model’s structure forces **each part of an argument to be honed** till the whole itself is strengthened. 
:::

:::caution Limitations
* The Toulmin model is only effective to the extent that **one critically and creatively constructs their arguments**. In other words, the limitation of the Toulmin model is that it **cannot act as a substitute for actually researching and writing a report**. Instead, it is best used as a heuristic for constructing arguments. 
:::

:::info Recommended Modifications
* **Thorough research** of data that supports the claim, critiques of the qualifiers used and counter arguments, allows for a Toulmin argument to be strengthened. Learn more about how to conduct this research in the **Research Triangulation** section.
* It is necessary for **cognitive bias avoidance strategies to be employed** to ensure the **integrity of Toulmin arguments**. This is because the Toulmin model of argumentation is not free from biases such as confirmation bias and from skewing data or backings to support claims. 
:::

## PIAA Model

The Perceive, Interpret, Assess and Act Model (PIAA Model) is a model used to turn self awareness into intentional action. The figure above details what each of these components represent and also demonstrate the interconnected nature of our observations, analysis of a situation and resulting action.

#### When And How To Use The PIAA Model 

The PIAA Model is best used when interacting with stakeholders or when doing decision making. Documenting observations and then interpreting and assessing them separately allows for decision making that is not based on impulses or immediate, emotional reactions to situations. 

:::tip Advantages
* This model acts as a **cognitive bias avoidance mechanism** as there is a conscious separation of observations, interpretations, assessment and action. This makes it less likely to act without assessment, based on incomplete interpretations of observed phenomena.
* The model gives you a **mental scaffold for observing the world** that separates perceiving a situation from interpreting it. This conscious separation means there are constant mental checks occurring of whether an observation has *been* made or whether an interpretation is *being* made. 
:::

:::caution Limitations
* I have found that this **model is not capable of being used in an engineering design environment**, such as when working with a team. This is because **team environments are much more complicated** to navigate and the PIAA model has only had surface level usage in these contexts.
:::

:::info Recommended Modifications
* The **model of co-reflective practice** can be used **in addition to the PIAA model** to overcome the described limitation (Zahedi, et al.). In particular, the model of co-reflective practice is useful as it describes how communication between people can be strengthened by creating a **tight loop between perceiving and interpreting**. Unlike the PIAA model, which only generically connects perception, interpretation, assessment and action, this model allows for conversation matters to be **interpreted, reframed and relayed back to the speaker to clarify whether their message has come across successfully**. There is also the process of constraining and naming, as the model describes it, which concretizes subject matters or scopes topics within discussions. This **model’s usage alongside PIAA is a more accurate representation of design environments**.
* Another model that can be successfully used alongside the **PIAA model is the Hoover Dam Model**. The Hoover dam model is **a means of separating theory and practice**. PIAA is effectively used within the Hoover Dam Model to act as the bridge between theory and practice. This is an **effective means of** developing and **thinking of the practical application of solutions** making it especially helpful during diverging and converging.
:::