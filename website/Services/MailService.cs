using Microsoft.Extensions.Logging;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Services
{
    public class MailService
    {
        private ILogger<MailService> logger;
        public MailService(ILogger<MailService> logger)
        {
            this.logger = logger;
        }
        public void SendMessage(string name,string email, string text)
        {
            try
            {
                MimeMessage message = new MimeMessage();
                message.From.Add(new MailboxAddress(email,email));
                message.To.Add(new MailboxAddress("Коледж", "college.kooperat@gmail.com"));
                message.Subject = $"Відгук від {name}";
                message.Body = new BodyBuilder() { TextBody = text }.ToMessageBody();

                using (MailKit.Net.Smtp.SmtpClient client = new MailKit.Net.Smtp.SmtpClient())
                {
                    client.Connect("smtp.gmail.com", 465, true);
                    client.Authenticate("college.kooperat@gmail.com", "college0123");
                    client.Send(message);

                    client.Disconnect(true);
                    logger.LogInformation("Done");

                }               
            }
            catch (Exception e)
            {
                logger.LogError(e.Message);
            }
        }
    }
}
