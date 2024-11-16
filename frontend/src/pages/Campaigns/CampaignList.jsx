import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ChevronRight, Mail, Users, AlertTriangle } from "lucide-react";

const CampaignList = () => {
  const [campaigns] = useState([
    {
      id: 1,
      name: "Summer Sale 2024",
      date: "2024-11-15",
      audienceSize: 15420,
      sent: 14890,
      failed: 530,
      status: "completed",
    },
    {
      id: 2,
      name: "New Product Launch",
      date: "2024-11-14",
      audienceSize: 8750,
      sent: 8200,
      failed: 550,
      status: "in-progress",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Campaigns
        </h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" /> New Campaign
        </Button>
      </div>

      <div className="grid gap-6">
        <AnimatePresence>
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <motion.div
                    className="flex justify-between items-start"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold flex items-center">
                        {campaign.name}
                        {campaign.status === "in-progress" && (
                          <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                            In Progress
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-500">{campaign.date}</p>
                    </div>

                    <div className="flex space-x-8">
                      <div className="text-center">
                        <div className="flex items-center space-x-2 text-gray-500 mb-1">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">Audience</span>
                        </div>
                        <p className="font-semibold">
                          {campaign.audienceSize.toLocaleString()}
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center space-x-2 text-gray-500 mb-1">
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">Sent</span>
                        </div>
                        <p className="font-semibold text-green-600">
                          {campaign.sent.toLocaleString()}
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center space-x-2 text-gray-500 mb-1">
                          <AlertTriangle className="w-4 h-4" />
                          <span className="text-sm">Failed</span>
                        </div>
                        <p className="font-semibold text-red-600">
                          {campaign.failed.toLocaleString()}
                        </p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="self-center p-2 hover:bg-gray-100 rounded-full"
                      >
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      </motion.button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CampaignList;
