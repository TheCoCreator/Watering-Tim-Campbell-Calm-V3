import React, { useState } from 'react';
import { AdminLayout } from './AdminLayout';
import { AdminOverview } from './AdminOverview';
import { AdminSessions } from './AdminSessions';
import { AdminTools } from './AdminTools';
import { AdminAutomations } from './AdminAutomations';
import { AdminSettings } from './AdminSettings';
import { sessionReplays, calmTools, weeklyAutomations, SessionReplay, CalmTool, WeeklyAutomation } from '../../data/memberContent';

interface AdminAppProps {
  onLogout: () => void;
}

type AdminSection = "overview" | "sessions" | "tools" | "automations" | "settings";

export const AdminApp: React.FC<AdminAppProps> = ({ onLogout }) => {
  const [section, setSection] = useState<AdminSection>("overview");
  
  // Local state to simulate database behavior for the session
  const [sessions, setSessions] = useState<SessionReplay[]>(sessionReplays);
  const [tools, setTools] = useState<CalmTool[]>(calmTools);
  const [automations, setAutomations] = useState<WeeklyAutomation[]>(weeklyAutomations);

  const renderSection = () => {
    switch (section) {
      case 'overview':
        return <AdminOverview sessions={sessions} tools={tools} automations={automations} />;
      case 'sessions':
        return <AdminSessions sessions={sessions} onSessionsChange={setSessions} />;
      case 'tools':
        return <AdminTools tools={tools} onToolsChange={setTools} />;
      case 'automations':
        return <AdminAutomations automations={automations} onAutomationsChange={setAutomations} />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <AdminOverview sessions={sessions} tools={tools} automations={automations} />;
    }
  };

  return (
    <AdminLayout 
      activeSection={section} 
      onSectionChange={setSection} 
      onLogout={onLogout}
    >
      {renderSection()}
    </AdminLayout>
  );
};