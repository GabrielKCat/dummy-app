import React from 'react';
import { useScript } from './hooks';

const clientId =
  '763899876517-33mf9e0g7tmajp1ttiqjij3ss7fu5mfj.apps.googleusercontent.com';

export default function GoogleSignin({ credentialCallback }) {
  window.credentialCallback = credentialCallback;
  useScript('https://accounts.google.com/gsi/client');

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id={clientId}
        data-context="signin"
        data-ux_mode="popup"
        data-callback="credentialCallback"
        data-auto_prompt="false"
      />
      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-theme="filled_blue"
        data-text="signin"
        data-size="large"
        data-logo_alignment="left"
      />
    </>
  );
}
