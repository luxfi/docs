# Lux Coder's Handbook

## Introduction

Welcome to the Lux development community! This handbook is designed to guide you through the process of contributing to the Lux ecosystem. It outlines the best practices, contribution guidelines, code of conduct, and the rewards system for contributors.

---

## Table of Contents

- [Contribution Guidelines](#contribution-guidelines)
    - [Scope of Contributions](#scope-of-contributions)
    - [Getting Started](#getting-started)
    - [Coding Standards](#coding-standards)
    - [Commit Messages](#commit-messages)
    - [Pull Request Process](#pull-request-process)
- [Code of Conduct](#code-of-conduct)
- [Rewards System](#rewards-system)
    - [Weights Allocation](#weights-allocation)
    - [Proof of Contribution Table](#proof-of-contribution-table)
    - [Disqualification Criteria](#disqualification-criteria)
- [Communication Channels](#communication-channels)
- [Frequently Asked Questions](#frequently-asked-questions)
- [License](#license)

---

## Contribution Guidelines

### Scope of Contributions

We welcome contributions in the following areas:

- **Core Development**: Enhancements, optimizations, and new features for existing Lux platforms.
- **New Components**: Development of components that are not yet live (e.g., Lux ZChain, Lux Vote).
- **Cross-Chain Integrations**: Adding support for other blockchains (e.g., Solana, Cardano) to enhance interoperability.
- **Security and Auditing**: Identifying and fixing vulnerabilities, conducting code audits.
- **Documentation**: Improving existing documentation, translations (with strict quality standards), and creating tutorials.
- **Community Support**: Assisting other developers, participating in discussions, and providing valuable feedback.

### Getting Started

1. **Fork the Repository**: Fork the relevant Lux repository to your GitHub account.
2. **Clone the Repository**: Clone your forked repository to your local machine.
3. **Set Up Development Environment**: Follow the setup instructions in the `README.md` file.
4. **Identify an Issue**: Look for open issues labeled `good first issue`, `help wanted`, or propose your own enhancements.
5. **Create a Branch**: Use meaningful branch names like `feature/add-solana-support` or `bugfix/fix-login-error`.

### Coding Standards

- **Language Guidelines**: Follow the language-specific style guides (e.g., PEP 8 for Python, Google's style guide for JavaScript).
- **Code Comments**: Write clear and concise comments where necessary.
- **Documentation**: Update or add documentation in the `/docs` directory for any changes.
- **Testing**: Write unit tests for new features or changes and ensure all tests pass before submitting.

### Commit Messages

- Use the [Conventional Commits](https://www.conventionalcommits.org/) specification.
- **Format**: `<type>(scope): short description`
- **Example**: `feat(wallet): add eUTXO management support`

### Pull Request Process

1. **Commit Changes**: Commit your changes with clear commit messages.
2. **Push to Fork**: Push your branch to your forked repository.
3. **Open Pull Request**: Open a pull request against the original Lux repository.
4. **Fill PR Template**: Provide a detailed description, related issues, and testing instructions.
5. **Address Feedback**: Be responsive to code reviews and make necessary changes.
6. **Merge**: Once approved, a maintainer will merge your PR.

---

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we pledge to make participation in our project a harassment-free experience for everyone.

### Standards

- **Be Respectful**: Treat everyone with respect. No harassment, discrimination, or inappropriate language.
- **Be Collaborative**: Work together to resolve conflicts and assume good intentions.
- **Be Mindful**: Be considerate of others' time and effort.

### Enforcement

Instances of unacceptable behavior may be reported to the project team at [conduct@lux.network](mailto:conduct@lux.network). All complaints will be reviewed and investigated promptly.

---

## Rewards System

### Weights Allocation

- **Total Weights**: 100,000,000 weights over 24 months.
- **Monthly Weights**: Decrease by 10% each month to incentivize early contributions.
- **LUX Token Rewards**: Allocated based on your share of weights for the month.

### Proof of Contribution Table

To be eligible for rewards, contributors must submit their contributions to the **Proof of Contribution Table** for each snapshot period.

#### Snapshot Schedule

- **Snapshot Date**: The 1st of every month at 00:00 UTC.
- **Eligibility**: Contributions must be merged before the snapshot date.

#### Submission Guidelines

- **One Contribution per Pull Request**: Submit separate PRs for each contribution.
- **Provide Clear Proof**: Include links to commits, PRs, or issues. Ensure your contribution is easily verifiable.
- **Format**: Use the table format provided below.

#### Template

| Wallet Address                             | Link to Work                 | Weights Requested | Description of Contribution                |
|--------------------------------------------|------------------------------|-------------------|---------------------------------------------|
| `0xYourWalletAddress`                      | [Link to PR #123](URL)       | 50,000            | Implemented feature X in Lux Wallet         |

**Note**: Use the pipe `|` symbol correctly to maintain table formatting.

### Disqualification Criteria

Contributors may be disqualified from receiving rewards for:

- **Low-Quality Contributions**: Submissions that add little to no value, such as minor edits or trivial changes.
- **Gaming the System**: Attempts to circumvent rules by making insignificant changes to gain rewards.
- **Plagiarism**: Submitting others' work as your own.
- **Violating Code of Conduct**: Any behavior that breaches our community standards.

---

## Communication Channels

- **Discord**: Join our [Lux Discord Server](https://discord.gg/your-server) for real-time discussions.
- **Community Forum**: Participate in deeper discussions at [community.lux.network](https://community.lux.network).
- **Email**: For specific queries, contact us at [contributors@lux.network](mailto:contributors@lux.network).

---

## Frequently Asked Questions

**Q1: Can I submit multiple contributions in one pull request?**

A: No, please submit one contribution per pull request to facilitate the review process.

**Q2: Are translations accepted?**

A: Yes, but translations must meet our quality standards. Low-quality or auto-generated translations are not accepted.

**Q3: How are weights assigned to contributions?**

A: Weights are assigned based on the complexity, impact, and quality of the contribution.

---

## License

This handbook is licensed under the BSD License.

