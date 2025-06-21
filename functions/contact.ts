import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

// @ts-ignore
export const onRequestPost = mailChannelsPlugin({
  personalizations: (formData) => {
    // formData is a FormData object
    const name = formData.get("name") || "Anonymous";
    const email = formData.get("email");
    return {
      to: [{ name: "Toki Labs Team", email: "hello@tokilabs.io" }],
      subject: `New Partnership Inquiry from ${name}`,
      dkim: {
        domain: "tokilabs.io", // This should be a domain you have configured with MailChannels
        privateKey: Deno.env.get("MAILCHANNELS_PRIVATE_KEY"), // Ensure this environment variable is set in Cloudflare
        selector: "mailchannels",
      },
    };
  },
  from: (formData) => {
    const name = formData.get("name") || "Anonymous User";
    const email = formData.get("email") || "unknown@sender.com";
    return {
      name: `${name} (via Toki Labs Form)`,
      email: "partnership-form@tokilabs.io", // This should be an address on a domain verified with MailChannels
    };
  },
  respondWith: () => {
    // Determine language from headers or default
    // This is a simplified example; a real app might inspect `Accept-Language` 
    // or a hidden form field for locale to redirect to /it/thank-you
    // For now, defaulting to English thank you page.
    // TODO: Implement language-specific redirect based on original form page lang.
    return new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" }, // Default to English thank you page
    });
  },
  // Optional: customize the content of the email
  content: (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const message = formData.get("message");

    let html = `<h1>New Partnership Inquiry</h1>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>`;
    if (company) {
      html += `<p><strong>Company:</strong> ${company}</p>`;
    }
    html += `<p><strong>Message:</strong></p><p>${message}</p>`;

    return {
      html: html,
      text: `New Partnership Inquiry:\nName: ${name}\nEmail: ${email}${company ? '\nCompany: ' + company : ''}\nMessage:\n${message}`,
    };
  }
});

// Fallback for GET requests or other methods to this endpoint
// @ts-ignore
export const onRequestGet = (context) => {
  // Redirect to the main contact page or homepage if someone tries to GET this URL
  return new Response(null, {
    status: 302,
    headers: { Location: "/contact" }, 
  });
}; 