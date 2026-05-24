import salesforceCert from "../assets/certificates/Salesforce.pdf"
import ciscoCert from "../assets/certificates/CISCO.pdf"
import genAiCert from "../assets/certificates/GENAI.pdf"
import mlDatacampCert from "../assets/certificates/ML DATACAMP.pdf"
import salesforceLogo from "../assets/logos/salesforce.svg"
import ciscoLogo from "../assets/logos/cisco.svg"
import genAiLogo from "../assets/logos/genai.svg"
import datacampLogo from "../assets/logos/datacamp.svg"

const certifications = [
  {
    title: "Salesforce Certified Agentforce Specialist",
    subtitle: "Salesforce Certification",
    description:
      "Credential validating expertise in Salesforce Agentforce workflows, customer support automation, and CRM best practices.",
    file: salesforceCert,
    logo: salesforceLogo,
  },
  {
    title: "Networking Basics - Cisco Networking Academy",
    subtitle: "Cisco Certification",
    description:
      "Certificate covering core networking fundamentals, protocols, and architecture from Cisco Networking Academy.",
    file: ciscoCert,
    logo: ciscoLogo,
  },
  {
    title: "Mastering Advanced Generative AI Models",
    subtitle: "Generative AI Certification",
    description:
      "Certificate demonstrating knowledge of advanced generative AI models and practical applications in modern workflows.",
    file: genAiCert,
    logo: genAiLogo,
  },
  {
    title: "Machine Learning Datacamp",
    subtitle: "Datacamp Certification",
    description:
      "Certificate for machine learning coursework focused on supervised and unsupervised techniques, model evaluation, and data-driven solutions.",
    file: mlDatacampCert,
    logo: datacampLogo,
  },
]

export default certifications