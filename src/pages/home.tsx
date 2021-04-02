import Head from "next/head";
import React from "react";
import styles from "../styles/pages/Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>

      <section>
        <div>
          <span>
            <img src="/icons/logotime.svg" alt="Logo time-action" />
            <h1>Move.it</h1>
          </span>
          <h2>Faça seu login na plataforma</h2>
        </div>

        <div>
          <h3>Bem-vindo</h3>

          <span>
            <p>
              <img src="/icons/github.svg" alt="github logo" />
              Acesse com o GitHub
            </p>
          </span>

          <form>
            <input
              type="username"
              name="username"
              placeholder="Digite seu username"
            />

            <button type="button">Login</button>
          </form>
        </div>
      </section>
    </div>
  );
}
