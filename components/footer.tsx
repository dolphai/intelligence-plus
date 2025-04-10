"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:place-items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Intelligence Plus
            </h3>
            <p className="mb-4">
              We are building the Future Human Capital Of India through 21st
              Century Skills
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-violet-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="hover:text-violet-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="hover:text-violet-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="hover:text-violet-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-violet-400 transition-colors"
                >
                  After School Programs{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-violet-400 transition-colors"
                >
                  In-school Curriculum
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-violet-400 transition-colors"
                >
                  Educational Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-violet-400 transition-colors"
                >
                  Innoventure Challenge
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="shrink-0 h-5 text-violet-400" />
                <span>
                  IntelligencePlus, 602, Suyog Center, Jawaharlal Road, Market
                  Yard, Gultekdi, Pune, Maharashtra 411037.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-violet-400" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-violet-400" />
                <span>info@intelligentplus.edu</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Intelligence Plus. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
