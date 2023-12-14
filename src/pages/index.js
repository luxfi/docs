import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Card from "../components/Card";
import { translate } from "@docusaurus/Translate";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Homepage" description="Lux Dev Docs">
      <main className={styles.main}>
        <br />
        <h1
          align="center"
          title="tagline"
          style={{
            fontWeight: "700",
            marginBottom: "0px",
            fontSize: "x-large",
          }}
        >
          {translate({ message: "Welcome to Lux Dev Docs" })}
        </h1>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="/build/subnet/hello-subnet"
                header={{
                  label: translate({ message: "🚀 Launch Your First Subnet" }),
                }}
                body={{
                  label: translate({
                    message:
                      "Start your Subnet development journey by creating a subnet in under five minutes",
                  }),
                }}
              />

              <Card
                to="intro"
                header={{
                  label: translate({ message: "▼ Learn about Lux" }),
                }}
                body={{
                  label: translate({
                    message:
                      "Discover how Subnets and Lux Consensus are revolutionizing Web3",
                  }),
                }}
              />

              <Card
                to="/nodes/validate/add-a-validator"
                header={{
                  label: translate({ message: "😎 Become a Validator" }),
                }}
                body={{
                  label: translate({
                    message:
                      "Join Lux's Proof-of-Stake protocol to help secure the network and earn rewards",
                  }),
                }}
              />

              <Card
                to="reference"
                header={{
                  label: translate({ message: "💻 View Lux APIs" }),
                }}
                body={{
                  label: translate({
                    message:
                      "Access low-level protocol interfaces to build your custom dapp",
                  }),
                }}
              />

              <Card
                to="/build/dapp/launch-dapp"
                header={{
                  label: translate({
                    message: "🛠️ Launch Your Dapp on Lux",
                  }),
                }}
                body={{
                  label: translate({
                    message:
                      "Learn everything you need to deploy an EVM-compatible smart contract",
                  }),
                }}
              />

              <Card
                to="https://github.com/luxdefi/hypersdk"
                header={{
                  label: translate({ message: "🛠️ HyperSDK" }),
                }}
                body={{
                  label: translate({
                    message:
                      "Opinionated Framework for Building Hyper-Scalable Blockchains on Lux",
                  }),
                }}
              />
            </div>
          </div>
        </section>
      </main>

      <main className={styles.main}>
        <br />
        <h1
          align="center"
          style={{
            fontWeight: "700",
            marginBottom: "0px",
            fontSize: "x-large",
          }}
        >
          {translate({ message: "Learn with Lux Academy" })}
        </h1>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="https://academy.lux.network/course/fundamentals?utm_source=dev-docs&utm_medium=website&utm_content=learn-lux"
                header={{
                  label: translate({ message: "▼ Lux Fundamentals" }),
                }}
                body={{
                  label: translate({
                    message:
                      "Beginner-friendly course to get a high level overview of Lux Consensus, Subnets, and VM",
                  }),
                }}
              />

              <Card
                to="https://academy.lux.network/course/subnet-architecture?utm_source=dev-docs&utm_medium=website&utm_content=learn-lux"
                header={{
                  label: translate({ message: "🌐 Subnet Architecture" }),
                }}
                body={{
                  label: translate({
                    message:
                      "Explore Lux's Subnet Architecture designed for Scalability and Enterprise Adoption",
                  }),
                }}
              />

              <Card
                to="https://academy.lux.network/course/customize-evm?utm_source=dev-docs&utm_medium=website&utm_content=learn-lux"
                header={{
                  label: translate({ message: "🛠️ Customize the EVM" }),
                }}
                body={{
                  label: translate({
                    message:
                      "Learn to Customize Ethereum Virtual Machine and Launch Your Personalized Blockchain on Lux",
                  }),
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
