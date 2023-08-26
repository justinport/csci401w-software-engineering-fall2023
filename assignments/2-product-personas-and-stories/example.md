# Product Personas and Stories

## Team: Keepers of the Crypt

Table of Contents

- [Product Definition](#product-definition)
- [Vision Statement](#vision-statement)
- [Product Personas](#product-personas)
- [Product Scenarios](#product-scenarios)
- [User Stories](#user-stories)
- [User Experience](#user-experience)

## Product Definition

**Blockr.io** is a blockchain forensic analysis tool used by financial compliance professionals to investigate the source or destination of funds transferred using the blockchain. The blockchain technology introduces a novel way for individuals and entities to transfer funds using the decentralized network of ledgers. The blockchain user base continues to grow which makes knowing the source of funds imperative for client onboarding. Financial institutions have an obligation to know their customers and understand the source of funds on an ongoing basis. Blockr.io serves as a tool to empower risk managers in analyzing their client's behavior.

## Vision Statement

FOR financial compliance professionals WHO need to look into the source/destination of funds transferred using the blockchain. **Blockr.io** is a web-based SaaS application THAT permits compliance teams to derive insights from the blockchain and mitigate financial crime risk. UNLIKE other forensic analysis tools, OUR PRODUCT provides state of the art technology that empowers compliance teams to make better risk management decisions.

## Product Personas

- **Persona 1**: Blockr.io clients (user) are the organizations which subscribe to our SaaS product or have our technology installed on their premises.
- **Persona 2**: Investigators (user) are the primary users of the application. The investigations team will interact with the network graphs, search the blockchain, make escalation decisions.
- **Persona 3**: Leadership/management (user) teams are concerned with the overall performance of investigators and the enterprise’s risk exposure.
- **Persona 4**: Tenant administrators configure the tenant instance. This includes adding/inviting users, configuring the alerting rules meant to notify the client of a potential risky transaction, updating watchlists, etc.

## Product Scenarios

### Product Scenario 1

**ACME Bank** has recently onboarded a new business line which will introduce new customers from the European Union. The new portfolio of customers includes clients known to receive and send funds transfers from or to cryptocurrency exchanges, including decentralized exchanges. The new customers expose the bank to potential risk associated with the origin of the funds. **Rick James**, head of Financial Crime Compliance, gathers the compliance team to assess the risk associated with the new customers. Promptly, the compliance data management team collects the wallet addresses associated with these onboard clients, to load them into Blockr.io. Within minutes, Rick James is notified of risky transactions and the alerts are routed to the investigations team.

**Kathy Griffin**, Head of Sanctions screening, was tasked with assessing the risk associated with ACME Bank’s newly onboarded clients. Kathy assembles her investigations team to review the exceptions identified by Blockr.io. Kathy understands how important this assignment is, so she utilizes Blockr.io's real-time dashboard to monitor the progress her team is making as they review exceptions, and credible concerns are identified.

**David Copperfield** is the lead investigator for ACME Bank’s screening team. David uses Blockr.io to uncover risk associated with the transactions found on the blockchain, through the unique graphs presented in Blockr.io's user interface. David and his team can explore relationships between wallets by double-clicking nodes and expanding the network of links. If risky connections are identified, then David and his team can flag and save network data for further review. David may choose to escalate a risky transaction to senior leadership through the Blockr.io customizable workflows.

## User Stories

### Feature1: Multi-tenant Authentication

**Description**

- As a Blockr.io client, I need a way to manage my Blockr.io subscriptions which include adding and removing users.
- As an investigator using Blockr.io, I need a way to log into the application. Authentication will grant me the necessary permission to complete my tasks.
- As a member of the organization's (client) leadership team, I need to log into the Blockr.io application and access dashboards.

**Constraints**

Authentication from the SaaS application requires verification through the client’s authentication protocol or through our authentication mechanism.

**Comments**

- All users will authenticate through a single page and will be routed to the appropriate instance based on access policies setup by instance administrators.
- Users may only set up an account through invitation from instance administrators.

### Feature2: Dashboard

**Description**

- As a Blockr.io user, I want to visualize my organization’s performance and usage of the Blockr.io application.
- As a Blockr.io user, I need to know the breakdown of exception backlogs, displayed by status group (open/in-progress/closed).
- As a Blockr.io user, I need to know if exceptions were assigned to me for further review.
- As a Blockr.io user, I need to know when progress was made on an exception I am "watching".
- As a member of the Leadership/management team, I want to know how many active users are working.
- As a member of the Leadership/management team, I want to know how many exceptions were escalated for further review by the investigations team.

**Constraints**

Dashboard must only share tenant-specific statistics.

### Feature3: Network Graph User Interface

**Description**

- As an investigator, I need a way to search a given bitcoin address on the blockchain.
- As an investigator, I need a way to view connections to a bitcoin address as a graph.
- As an investigator, I need a way to click on a bitcoin address node on the graph and read information about the address such as the number of transactions, holdings, and reports of abuse.
- As an investigator, I need a way to flag bitcoin address nodes for ongoing monitoring.
- As an investigator, I need a way to assign a network graph to a colleague, including escalating to senior management.
- As an investigator, I need a way to enter comments about a network to share with colleagues, including senior management.

**Constraints**

Sharing/assigning networks to colleagues is limited to those within the tenant instance.

### Feature4: Administrator Panel

**Description**

- As an administrator, I need to have a way to invite users to the organization’s instance.
- As an administrator, I need a way to manage a watchlist of addresses.
- As an administrator, I need a way to adjust the parameters for our transactions monitoring system.

**Constraints**

Limited to the tenant's instance.

## User Experience

Describe the user interface for your product.

- [Insert simple wireframes of your product—what will it look like from a user interface perspective]

  Login page: <insert picture here>

  Manage users: <insert picture here>

  Dashboard: <insert picture here>

  Exceptions assigned to the user: <insert picture here>

  Notifications: <insert picture here>

  Administrator panel: <insert picture here>

  Investigative UI – warnings detected: <insert picture here>

  Sharing networks with colleagues: <insert picture here>
