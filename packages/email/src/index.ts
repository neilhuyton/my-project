import nodemailer from "nodemailer";

interface EmailConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  appUrl: string;
}

const createTransporter = (config: EmailConfig) => {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });
};

export async function sendVerificationEmail(
  to: string,
  verificationToken: string,
  config: EmailConfig
) {
  const transporter = createTransporter(config);
  const verificationUrl = `${config.appUrl}/verify-email?token=${verificationToken}`;

  const mailOptions = {
    from: config.from,
    to,
    subject: "Verify Your Email Address",
    html: `
      <h1>Welcome!</h1>
      <p>Please verify your email address by clicking the link below:</p>
      <a href="${verificationUrl}">Verify Email</a>
      <p>If you didn’t register, please ignore this email.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function sendResetPasswordEmail(
  to: string,
  resetToken: string,
  config: EmailConfig
) {
  const transporter = createTransporter(config);
  const resetUrl = `${config.appUrl}/confirm-reset-password?token=${resetToken}`;

  const mailOptions = {
    from: config.from,
    to,
    subject: "Reset Your Password",
    html: `
      <h1>Password Reset Request</h1>
      <p>You requested to reset your password. Click the link below to set a new password:</p>
      <a href="${resetUrl}">Reset Password</a>
      <p>This link will expire in 1 hour. If you didn’t request a password reset, please ignore this email.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function sendEmailChangeNotification(
  oldEmail: string,
  newEmail: string,
  config: EmailConfig
) {
  const transporter = createTransporter(config);
  const mailOptions = {
    from: config.from,
    to: oldEmail,
    subject: "Your Email Address Has Been Changed",
    html: `
      <h1>Email Address Change Notification</h1>
      <p>The email address associated with your account has been changed to <strong>${newEmail}</strong>.</p>
      <p>If you initiated this change, no further action is required. If you did not request this change, please contact support immediately at <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>.</p>
      <p>Thank you,<br>Your App Team</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function sendPasswordChangeNotification(
  to: string,
  config: EmailConfig
) {
  const transporter = createTransporter(config);
  const mailOptions = {
    from: config.from,
    to,
    subject: "Your Password Has Been Changed",
    html: `
      <h1>Password Change Notification</h1>
      <p>The password for your account has been successfully changed.</p>
      <p>If you initiated this change, no further action is required. If you did not request this change, please contact support immediately at <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>.</p>
      <p>Thank you,<br>Your App Team</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
