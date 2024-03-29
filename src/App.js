import "./App.css";

//import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [invites, setInvites] = useState([]);
  const unread = invites.filter(({ status }) => status === "unread");
  useEffect(() => {
    // Put the API call here
    setInvites(invitation.invites);
  }, []);

  setTimeout(
    () => setInvites([...invites, ...invitation_update.invites]),
    5000
  );
  const handleMarkAsRead = index => {
    invites[index].status = "read";
    setInvites([...invites]);
  };
  return (
    <div className="App">
      <label>Invitation list({unread.length})</label>
      <ul>
        {invites.map(({ invite, status }, index) => (
          <div className={status}>
            {invite}
            {status === "unread" ? (
              <button onClick={() => handleMarkAsRead(index)}>
                Mark as read
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

const invitation = {
  invites: [
    {
      invite_id: 1,
      sender_id: "jeet",
      sig_id: 25121,
      invite:
        "The Owner has invited you to join Situation 25121 [Mail system down]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Internal",
      invite_time: 1398892261,
      user_id: "3",
      status: "read"
    },
    {
      invite_id: 2,
      sender_id: "andrew",
      sig_id: 23951,
      invite:
        "The Owner has invited you to join Situation 23951 [Slow access to Purchasing system]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Email",
      invite_time: 1398992261,
      user_id: "1",
      status: "read"
    },
    {
      invite_id: 3,
      sender_id: "andrew",
      sig_id: 92394,
      invite:
        "The Owner has invited you to join Situation 92394 [End-users reporting no service in London]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Twitter",
      invite_time: 1399092261,
      user_id: "1",
      status: "read"
    },
    {
      invite_id: 4,
      sender_id: "andrew",
      sig_id: 49120,
      invite:
        "The Owner has invited you to join Situation 49120 [No access to AWS account]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Internal",
      invite_time: 1399192261,
      user_id: "1",
      status: "unread"
    },
    {
      invite_id: 5,
      sender_id: "mike",
      sig_id: 10293,
      invite:
        "The Owner has invited you to join Situation 10293 [Mail intermittendly available]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Email",
      invite_time: 1399292261,
      user_id: "2",
      status: "read"
    },
    {
      invite_id: 6,
      sender_id: "jeet",
      sig_id: 25121,
      invite:
        "The Owner has invited you to join Situation 25121 [Mail system down]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Internal",
      invite_time: 1398892261,
      user_id: "3",
      status: "read"
    },
    {
      invite_id: 7,
      sender_id: "mike",
      sig_id: 23951,
      invite:
        "The Owner has invited you to join Situation 23951 [Slow access to Purchasing system]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Email",
      invite_time: 1398992261,
      user_id: "2",
      status: "read"
    },
    {
      invite_id: 8,
      sender_id: "jeet",
      sig_id: 92394,
      invite:
        "The Owner has invited you to join Situation 92394 [End-users reporting no service in London]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Twitter",
      invite_time: 1399092261,
      user_id: "3",
      status: "read"
    },
    {
      invite_id: 9,
      sender_id: "andrew",
      sig_id: 49120,
      invite:
        "The Owner has invited you to join Situation 49120 [No access to AWS account]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Internal",
      invite_time: 1399192261,
      user_id: "1",
      status: "unread"
    },
    {
      invite_id: 10,
      sender_id: "mike",
      sig_id: 10293,
      invite:
        "The Owner has invited you to join Situation 10293 [Mail intermittendly available]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Email",
      invite_time: 1399292261,
      user_id: "2",
      status: "read"
    },
    {
      invite_id: 11,
      sender_id: "jeet",
      sig_id: 25121,
      invite:
        "The Owner has invited you to join Situation 25121 [Mail system down]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Internal",
      invite_time: 1398892261,
      user_id: "3",
      status: "read"
    },
    {
      invite_id: 12,
      sender_id: "mike",
      sig_id: 23951,
      invite:
        "The Owner has invited you to join Situation 23951 [Slow access to Purchasing system]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Email",
      invite_time: 1398992261,
      user_id: "2",
      status: "read"
    },
    {
      invite_id: 13,
      sender_id: "andrew",
      sig_id: 92394,
      invite:
        "The Owner has invited you to join Situation 92394 [End-users reporting no service in London]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Twitter",
      invite_time: 1399092261,
      user_id: "1",
      status: "read"
    },
    {
      invite_id: 14,
      sender_id: "andrew",
      sig_id: 49120,
      invite:
        "The Owner has invited you to join Situation 49120 [No access to AWS account]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Internal",
      invite_time: 1399192261,
      user_id: "1",
      status: "unread"
    },
    {
      invite_id: 15,
      sender_id: "andrew",
      sig_id: 10293,
      invite:
        "The Owner has invited you to join Situation 10293 [Mail intermittendly available]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Email",
      invite_time: 1399292261,
      user_id: "1",
      status: "read"
    }
  ]
};

const invitation_update = {
  invites: [
    {
      invite_id: 1,
      sender_id: "andrew",
      sig_id: 25121,
      invite:
        "The Owner has invited you to join Situation 25121 [SAN failure]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Internal",
      invite_time: 1398892261,
      user_id: "1",
      status: "unread"
    },
    {
      invite_id: 16,
      sender_id: "mike",
      sig_id: 23951,
      invite:
        "The Owner has invited you to join Situation 23951 [Slow access to Purchasing system]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Email",
      invite_time: 1398992261,
      user_id: "2",
      status: "read"
    },
    {
      invite_id: 17,
      sender_id: "andrew",
      sig_id: 92394,
      invite:
        "The Owner has invited you to join Situation 92394 [End-users reporting no service in London]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Twitter",
      invite_time: 1399092261,
      user_id: "1",
      status: "read"
    },
    {
      invite_id: 18,
      sender_id: "andrew",
      sig_id: 49120,
      invite:
        "The Owner has invited you to join Situation 49120 [No access to AWS account]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Internal",
      invite_time: 1399192261,
      user_id: "1",
      status: "unread"
    },
    {
      invite_id: 5,
      sender_id: "jeet",
      sig_id: 10293,
      invite:
        "The Owner has invited you to join Situation 10293 [Mail intermittendly available]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
      vector: "Email",
      invite_time: 1399292261,
      user_id: "3",
      status: "read"
    }
  ]
};
