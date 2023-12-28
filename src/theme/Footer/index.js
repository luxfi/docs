/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Link from "@docusaurus/Link";
import { useThemeConfig } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { translate } from "@docusaurus/Translate";
import {
  BsYoutube,
  BsGithub,
  BsTwitter,
  BsDiscord,
  BsTelegram,
  BsFacebook,
  BsLinkedin,
  BsReddit,
} from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

function Footer() {
  const { footer } = useThemeConfig();
  const { copyright, links = [], logo = {} } = footer || {};
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  if (!footer) {
    return null;
  }

  return (
    <footer className="footer footer--dark">
      <div className="container">
        <div class="row">
          <div class="col">
            <div className="footer-row">
              <Link
                className="footer-main-list"
                href="https://explore.lux.network/"
              >
                <h3>{translate({ message: "Explorer" })}</h3>
              </Link>
            </div>
            <div className="footer-row">
              <Link
                className="footer-main-list"
                href="https://lux.chat"
              >
                <h3>
                  {translate({ message: "AI" })}{" "}
                  <FaGraduationCap className="footer-academy-cap"></FaGraduationCap>
                </h3>
              </Link>
            </div>
            <div className="footer-row">
              <Link
                className="footer-main-list"
                href="https://help.lux.network/"
              >
                <h3>{translate({ message: "Support" })}</h3>
              </Link>
            </div>
            <div className="footer-row">
              <Link className="footer-main-list" href="https://wallet.lux.network/">
                <h3>{translate({ message: "Wallet" })}</h3>
              </Link>
            </div>
          </div>
          <div class="col">
            <div className="footer-row">
              <a href="https://t.me/luxdefi">
                <BsTelegram className="footer-social"></BsTelegram>
              </a>
              <a href="https://discord.gg/MxFdWsQY">
                <BsDiscord className="footer-social"></BsDiscord>
              </a>
              <a href="https://github.com/luxdefi">
                <BsGithub className="footer-social"></BsGithub>
              </a>
              <a href="https://twitter.com/luxdefi">
                <BsTwitter className="footer-social"></BsTwitter>
              </a>
              <a href="https://www.reddit.com/r/luxdefi/">
                <BsReddit className="footer-social"></BsReddit>
              </a>
              <a href="https://www.youtube.com/@luxdefi">
                <BsYoutube className="footer-social"></BsYoutube>
              </a>
              <a href="https://www.linkedin.com/company/luxdefi">
                <BsLinkedin className="footer-social"></BsLinkedin>
              </a>
              <a href="https://www.facebook.com/luxdefi">
                <BsFacebook className="footer-social"></BsFacebook>
              </a>
            </div>
            <div
              className="row"
              style={{ marginTop: "10px", maxWidth: "500px" }}
            >
              <div class="col" style={{}}>
                <h4 className="footer-heading">
                  {translate({ message: "Developers" })}
                </h4>
                <a href={translate({ message: "https://github.com/orgs/luxdefi/discussions" })}>
                  <div className="footer-list">
                    {translate({ message: "Discussions" })}
                  </div>
                </a>
                <a
                  href={translate({
                    message: "https://explore.lux.network/stats",
                  })}
                >
                  <div className="footer-list">
                    {translate({ message: "Network Stats" })}
                  </div>
                </a>
                <a
                  href={translate({
                    message:
                      "https://www.youtube.com/@luxdefi",
                  })}
                >
                  <div className="footer-list">
                    {translate({ message: "Video Tutorials" })}
                  </div>
                </a>
                <a
                  href={translate({
                    message:
                      "https://hackenproof.com/luxdefi",
                  })}
                >
                  <div className="footer-list">
                    {translate({ message: "Bug Bounty" })}
                  </div>
                </a>
              </div>
              <div class="col">
                <h4 className="footer-heading">
                  {translate({ message: "Community" })}
                </h4>
                <a href="https://medium.com/luxdefi">
                  <div className="footer-list">Medium</div>
                </a>
                <a href="https://blog.lux.network/">
                  <div className="footer-list">Blog</div>
                </a>
                <a href="https://lux.shop/">
                  <div className="footer-list">Merch</div>
                </a>
              </div>
              <div class="col">
                <h4 className="footer-heading">
                  {translate({ message: "More" })}
                </h4>
                <a href="https://drive.google.com/drive/folders/1vDXeyAeJUQLzeua447CT0Xn_h2YVq-6G">
                  <div className="footer-list">Whitepapers</div>
                </a>
                <a href="https://lux.partners/">
                  <div className="footer-list">Enterprise Solutions</div>
                </a>
                <a href="https://github.com/luxdefi/audits">
                  <div className="footer-list">Audits</div>
                </a>
                <a href="mailto:legal@lux.partners">
                  <div className="footer-list">Legal</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom text--center">
          <div
            className="footer__copyright"
            style={{ fontSize: "small", padding: "15px" }}
          >
            Copyright © {new Date().getFullYear()}{" "}
            <a href="https://lux.partners/terms" className="hover">
              Lux Partners Limited
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
