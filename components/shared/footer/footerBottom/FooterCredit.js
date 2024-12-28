import Link from "next/link";
import React from "react";

const FooterCredit = () => {
  return (
    <section>
      <p className="text-sm lg:text-right md:text-left text-center">
        <Link
          href="https://www.linkedin.com/in"
          className="text-primary hover:text-primary/50"
        >
          Nur Adnan Chowdhury
        </Link>
      </p>
    </section>
  );
};

export default FooterCredit;
