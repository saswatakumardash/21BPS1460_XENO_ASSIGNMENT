import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Save, RefreshCw } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AudienceBuilder = () => {
  const [conditions, setConditions] = useState([]);
  const [audienceSize, setAudienceSize] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateAudienceSize = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setAudienceSize(Math.floor(Math.random() * 50000) + 10000);
      setIsCalculating(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Create Audience Segment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AnimatePresence>
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4"
              >
                <div className="flex space-x-4 items-center">
                  <select className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Total Spending</option>
                    <option>Visit Count</option>
                    <option>Last Visit Date</option>
                  </select>
                  <select className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Greater than</option>
                    <option>Less than</option>
                    <option>Equals</option>
                  </select>
                  <input 
                    type="text" 
                    className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Value" 
                  />
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const newConditions = [...conditions];
                      newConditions.splice(index, 1);
                      setConditions(newConditions);
                    }}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div className="space-y-4 mt-6">
            <Button
              onClick={() => setConditions([...conditions, {}])}
              className="w-full"
              variant="outline"
            >
              <Plus className="w-4 h-4 mr-2" /> Add Condition
            </Button>

            <div className="flex space-x-4">
              <Button
                onClick={calculateAudienceSize}
                className="flex-1"
                disabled={conditions.length === 0 || isCalculating}
              >
                {isCalculating ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                  </motion.div>
                ) : (
                  <span>Calculate Audience Size</span>
                )}
              </Button>
              <Button
                className="flex-1"
                variant="default"
                disabled={conditions.length === 0}
              >
                <Save className="w-4 h-4 mr-2" /> Save Segment
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {audienceSize && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6"
              >
                <Alert>
                  <AlertDescription className="text-lg">
                    Estimated audience size: {audienceSize.toLocaleString()} customers
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AudienceBuilder;
