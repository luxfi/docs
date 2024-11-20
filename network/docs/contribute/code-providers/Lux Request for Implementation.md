# Lux Reference Implementation (LRI-001): Community Contribution Framework Implementation

**LRI Number**: 001  
**LRC Reference**: LRC-001  
**Title**: Implementation of Community Contribution Framework  
**Status**: Draft  
**Type**: Informational  
**Created**: 2024-11-20  
**Authors**: [Your Name] (<your.email@example.com>)

## Introduction

This LRI provides the implementation details for the Community Contribution Framework proposed in LRC-001. It includes guidelines on repository setup, contribution processes, tools, and templates to facilitate effective community collaboration within the Lux ecosystem.

## Repository Setup

To ensure a consistent and organized structure across all Lux repositories, adhere to the following guidelines:

### Repository Structure

- **Main Repositories**: Each project within the Lux ecosystem has its own repository under the [Lux GitHub organization](https://github.com/luxfi). Key repositories include:
    - **`lux-network/core`**: The core Lux Network codebase.
    - **`lux-network/docs`**: Documentation, guides, and tutorials.
    - **`lux-network/proposals`**: For submitting and discussing Lux Requests for Comments (LRCs) and Lux Reference Implementations (LRIs).
    - **`lux-network/tools`**: Auxiliary tools, SDKs, and libraries.
- **Directory Structure within Repositories**:
    - **`src/`**: Source code.
    - **`docs/`**: Documentation files, including contribution guidelines and proposals.
    - **`tests/`**: Test suites and related resources.
    - **`examples/`**: Sample code and usage examples.
    - **`scripts/`**: Automation scripts for building, testing, and deployment.
    - **`proposals/`**: For LRCs and LRIs, located at `docs/contributions/proposals/`.

### Branching Strategy

- **`main`**: Stable code ready for production.
- **`develop`**: Latest development code, integrating features ready for testing.
- **Feature Branches**: For new features or improvements, named as `feature/short-description`.
- **Bugfix Branches**: For bug fixes, named as `bugfix/issue-number`.
- **Release Branches**: For preparing releases, named as `release/version-number`.

### Access Control

- **Maintainers**: Core team members with write access to the main repositories.
- **Contributors**: Community members who contribute via pull requests.
- **Reviewers**: Experienced contributors with permissions to review and approve PRs.

## Contribution Guidelines

Contributions are welcome from all community members, including code, documentation, bug reports, feature requests, and more.

### Code Contributions

#### Getting Started

1. **Fork the Repository**: Create your own fork of the relevant Lux repository.
2. **Clone Your Fork**: Clone your fork to your local machine.
3. **Set Upstream Remote**: Add the original repository as an upstream remote.

#### Development Workflow

1. **Create a Branch**: Create a new branch for your feature or bugfix.
2. **Implement Changes**: Write code, add tests, and update documentation as needed.
3. **Commit Changes**: Commit your changes with clear and descriptive commit messages.
4. **Keep Branch Updated**: Regularly pull changes from the `develop` branch.
5. **Push to Your Fork**: Push your branch to your forked repository.
6. **Open a Pull Request**: Submit a PR to the `develop` branch of the main repository.

### Pull Request Guidelines

- **Title and Description**: Provide a clear title and detailed description of your changes.
- **Reference Issues or Proposals**: Link any related issues, LRCs, or LRIs.
- **Checklist**:
    - [ ] Code adheres to coding standards.
    - [ ] Tests have been added and pass.
    - [ ] Documentation has been updated.
- **Review Process**:
    - At least two reviewers must approve the PR.
    - Address any feedback promptly.
    - Maintainers will merge approved PRs.

### Proposal Submission

For significant changes or enhancements, contributors should submit a proposal document.

- **Location**: Place proposal documents in `docs/contributions/proposals/`.
- **Templates**: Use the provided templates for LRCs and LRIs to ensure consistency.
- **Process**:
    1. **Draft the Proposal**: Clearly outline the proposed changes.
    2. **Submit the Proposal**: Open a pull request to add the proposal document.
    3. **Discussion**: Engage with the community and maintainers for feedback.
    4. **Revision**: Update the proposal based on feedback.
    5. **Approval**: Once agreed upon, the proposal can be accepted.

### Code Standards

- **Language-Specific Guidelines**:
    - **Go**: Follow the [Go Code Review Comments](https://github.com/golang/go/wiki/CodeReviewComments).
    - **Solidity**: Adhere to the [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.20/style-guide.html).
- **Linting and Formatting**: Use appropriate tools to ensure code quality.
- **Comments and Documentation**: Write clear comments and update relevant documentation.

### Testing

- **Unit Tests**: Required for new features and bug fixes.
- **Integration Tests**: Where applicable, to ensure components work together.
- **Continuous Integration**: All tests must pass in the CI pipeline before PRs are merged.

## Tools and Templates

To assist contributors, the following are provided:

### Issue Templates

- **Bug Report**: For reporting bugs with detailed reproduction steps.
- **Feature Request**: For suggesting new features or enhancements.
- **Proposal Template**: For submitting LRCs and LRIs.

### Pull Request Template

A standard template to ensure all necessary information is included in PRs.

### Code of Conduct

All contributors must adhere to the project's [Code of Conduct](https://docs.lux.network/contribute/code-providers/Coder's%20Handbook#code-of-conduct), promoting a respectful and inclusive community.

## Communication Channels

Effective communication is essential for collaboration.

- **Discord**: Join the [Lux Discord Server](https://discord.gg/K746mGXdXr) for real-time discussions.
- **Community Forum**: (Pending)
- **GitHub Discussions**: Use the Discussions tab in repositories for topic-specific conversations.

## License

All contributions are licensed under the BSD 3-Clause License. By contributing, you agree that your contributions will be licensed accordingly.

## Conclusion

This LRI aims to establish a clear and efficient framework for community contributions to the Lux ecosystem. By following these guidelines, contributors can effectively participate and help advance the project.

---

**Note**: This LRI is subject to change based on community feedback and evolving project needs. Contributors are encouraged to participate in discussions to continuously improve the contribution process.
