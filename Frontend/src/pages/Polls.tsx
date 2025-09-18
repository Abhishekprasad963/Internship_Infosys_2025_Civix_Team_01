import { Plus, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
//@ts-ignore
import API from '../api'; // Import the centralized API client

// Define the structure for a Poll object
interface Poll {
  id: string;
  question: string;
  description: string;
  options: string[];
  closesOn: string;
  votes: number[];
  totalVotes: number;
  hasVoted: boolean;
  location: string;
  isMyPoll: boolean;
}

// Toast Modal for showing success/error messages
interface ToastModalProps {
  message: string;
  onClose: () => void;
  show: boolean;
  type?: "success" | "error";
}

const ToastModal: React.FC<ToastModalProps> = ({ message, onClose, show, type = "success" }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000); // Popup stays for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6 flex flex-col items-center">
        <div className={`mb-4 text-4xl ${type === "success" ? "text-green-500" : "text-red-500"}`}>
          {type === "success" ? "✔️" : "❌"}
        </div>
        <div className="text-lg font-semibold text-gray-800 mb-2 text-center">{message}</div>
        <p className="text-sm text-gray-500 mb-4 text-center">This popup will close automatically.</p>
        <button
          onClick={onClose}
          className={`px-6 py-2 rounded-lg font-semibold ${
            type === "success" ? "bg-green-600 text-white hover:bg-green-700" : "bg-red-600 text-white hover:bg-red-700"
          }`}
        >
          Close Now
        </button>
      </div>
    </div>
  );
};


const Polls: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [polls, setPolls] = useState<Poll[]>([]);
  const [activeTab, setActiveTab] = useState('Active Polls');
  const [toast, setToast] = useState<{ show: boolean; message: string; type?: "success" | "error" }>({ show: false, message: "", type: "success" });
  const [editingPoll, setEditingPoll] = useState<Poll | null>(null);

  // Form state
  const [pollQuestion, setPollQuestion] = useState('');
  const [pollDescription, setPollDescription] = useState('');
  const [pollOptions, setPollOptions] = useState(['', '']);
  const [pollLocation, setPollLocation] = useState('');
  const [closesOn, setClosesOn] = useState('');

  const tabs = ['Active Polls', 'Polls I Voted On', 'My Polls'];

  const fetchPolls = async () => {
    try {
      const res = await API.getPolls(); // Use API client
      const currentUserId = localStorage.getItem("userId");

      let fetchedPolls = res.data.map((poll: any) => ({
        id: poll._id,
        question: poll.title,
        description: poll.description,
        options: poll.options.map((o: any) => o.text),
        closesOn: poll.closeDate,
        votes: poll.options.map((o: any) => o.votes),
        totalVotes: poll.options.reduce((sum: number, o: any) => sum + o.votes, 0),
        hasVoted: false,
        location: poll.targetLocation || 'Community-wide',
        isMyPoll: poll.createdBy === currentUserId,
      }));

      if (currentUserId && currentUserId !== "undefined" && currentUserId !== "null") {
        const votedRes = await API.getVotedPolls(currentUserId); // Use API client
        const votedPollIds = new Set(votedRes.data);
        fetchedPolls = fetchedPolls.map((poll: any) => ({
          ...poll,
          hasVoted: votedPollIds.has(poll.id),
        }));
      }

      setPolls(fetchedPolls);
    } catch (err) {
      console.error("Error fetching polls:", err);
      setToast({ show: true, message: "Could not load polls.", type: "error" });
    }
  };
  
  useEffect(() => {
    fetchPolls();
  }, []);

  const resetAndCloseModal = () => {
    setShowCreateModal(false);
    setEditingPoll(null);
    setPollQuestion('');
    setPollDescription('');
    setPollOptions(['', '']);
    setPollLocation('');
    setClosesOn('');
  };

  const handleFormSubmit = async () => {
    if (!pollQuestion.trim() || !closesOn || pollOptions.filter(opt => opt.trim()).length < 2) {
      setToast({ show: true, message: "Please fill the question, close date, and at least two options.", type: "error" });
      return;
    }

    const userId = localStorage.getItem("userId");
    
    if (!userId || userId === "undefined" || userId === "null") {
      setToast({ show: true, message: "You must be logged in to create a poll.", type: "error" });
      return;
    }

    const pollData = {
      title: pollQuestion.trim(),
      description: pollDescription.trim(),
      options: pollOptions.filter(opt => opt.trim()),
      targetLocation: pollLocation.trim(),
      createdBy: userId,
      closeDate: closesOn,
    };
    
    try {
        if (editingPoll) {
            await API.updatePoll(editingPoll.id, pollData); // Use API client
            setToast({ show: true, message: "Poll updated successfully! ✨", type: "success" });
        } else {
            await API.createPoll(pollData); // Use API client
            setToast({ show: true, message: "Poll created successfully! 🎉", type: "success" });
        }
        await fetchPolls();
        resetAndCloseModal();
    } catch (err: any) {
        setToast({ show: true, message: `Error: ${err.response?.data?.error || err.message}`, type: "error" });
    }
  };

  const voteOnPoll = async (pollId: string, optionIndex: number) => {
    const userId = localStorage.getItem("userId");
    if (!userId || userId === "undefined" || userId === "null") {
      setToast({ show: true, message: "You must be logged in to vote.", type: "error" });
      return;
    }
    try {
      await API.voteOnPoll(pollId, optionIndex); // Use API client
      await fetchPolls();
      setToast({ show: true, message: "Vote submitted successfully!", type: "success" });
    } catch (err: any) {
      setToast({ show: true, message: `Error: ${err.response?.data?.error || err.message}`, type: "error" });
    }
  };
  
  const handleEditPoll = (poll: Poll) => {
    setEditingPoll(poll);
    setPollQuestion(poll.question);
    setPollDescription(poll.description);
    setPollOptions([...poll.options, '', ''].slice(0, 10));
    setPollLocation(poll.location);
    setClosesOn(poll.closesOn ? poll.closesOn.split('T')[0] : '');
    setShowCreateModal(true);
  };
  
  const handleDeletePoll = async (pollId: string) => {
    if (!window.confirm("Are you sure you want to permanently delete this poll?")) return;
    try {
      await API.deletePoll(pollId); // Use API client
      await fetchPolls();
      setToast({ show: true, message: "Poll deleted successfully! 🗑️", type: "success" });
    } catch (err: any) {
      setToast({ show: true, message: `Error: ${err.response?.data?.error || err.message}`, type: "error" });
    }
  };

  const addOption = () => pollOptions.length < 10 && setPollOptions([...pollOptions, '']);
  const removeOption = (index: number) => pollOptions.length > 2 && setPollOptions(pollOptions.filter((_, i) => i !== index));
  const updateOption = (index: number, value: string) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  const getFilteredPolls = () => {
    switch (activeTab) {
      case 'Polls I Voted On':
        return polls.filter(poll => poll.hasVoted);
      case 'My Polls':
        return polls.filter(poll => poll.isMyPoll);
      default:
        return polls;
    }
  };

  const filteredPolls = getFilteredPolls();

  return (
    <>
      <ToastModal
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />

      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">{editingPoll ? 'Edit Poll' : 'Create a New Poll'}</h2>
                <button onClick={resetAndCloseModal} className="text-gray-400 hover:text-gray-600"><X className="h-6 w-6" /></button>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Poll Question*</label>
                  <input type="text" value={pollQuestion} onChange={(e) => setPollQuestion(e.target.value)} placeholder="What do you want to ask?" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea value={pollDescription} onChange={(e) => setPollDescription(e.target.value)} placeholder="Provide more context..." rows={3} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input type="text" value={pollLocation} onChange={(e) => setPollLocation(e.target.value)} placeholder="e.g., San Diego, CA" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Poll Options*</label>
                    <div className="space-y-2">
                      {pollOptions.map((option, index) => (
                        <div key={index} className="flex gap-2">
                          <input type="text" value={option} onChange={(e) => updateOption(index, e.target.value)} placeholder={`Option ${index + 1}`} className="flex-1 p-2 border rounded-lg" />
                          {pollOptions.length > 2 && <button onClick={() => removeOption(index)} className="p-2 text-red-500 hover:text-red-700"><X className="h-4 w-4" /></button>}
                        </div>
                      ))}
                      {pollOptions.length < 10 && <button onClick={addOption} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 p-2"><Plus className="h-4 w-4" /> Add Option</button>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Closes On*</label>
                    <input type="date" value={closesOn} onChange={(e) => setClosesOn(e.target.value)} className="w-full p-2 border rounded-lg" />
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <button onClick={resetAndCloseModal} className="px-6 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
                  <button onClick={handleFormSubmit} className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900">{editingPoll ? "Update Poll" : "Create Poll"}</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Polls</h1>
              <p className="text-gray-600">Participate in community polls to make your voice heard.</p>
            </div>
            <button onClick={() => setShowCreateModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Plus className="h-4 w-4" /> Create Poll
            </button>
          </div>
          <div className="border-b">
            <div className="flex">
              {tabs.map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 text-sm font-medium relative ${activeTab === tab ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}>
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {filteredPolls.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500 mb-4">No polls to display in this category.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredPolls.map((poll) => (
                  <div key={poll.id} className="bg-gray-50 p-6 rounded-lg border">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{poll.question}</h3>
                      <div className="flex items-center gap-2">
                        {poll.isMyPoll && (
                          <div className="flex gap-2">
                            <button onClick={() => handleEditPoll(poll)} className="text-sm font-medium text-yellow-600 hover:text-yellow-800">Edit</button>
                            <button onClick={() => handleDeletePoll(poll.id)} className="text-sm font-medium text-red-600 hover:text-red-800">Delete</button>
                          </div>
                        )}
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{poll.location}</span>
                      </div>
                    </div>
                    {poll.description && <p className="text-gray-600 mb-4">{poll.description}</p>}
                    <div className="space-y-2 mb-4">
                      {poll.options.map((option, index) => (
                        <div key={index}>
                          <button onClick={() => voteOnPoll(poll.id, index)} disabled={poll.hasVoted} className={`w-full text-left p-3 rounded-lg border transition-colors ${poll.hasVoted ? 'bg-white cursor-not-allowed' : 'bg-white hover:bg-blue-50 hover:border-blue-300'}`}>
                            <div className="flex justify-between items-center">
                              <span>{option}</span>
                              {poll.hasVoted && (
                                <div className="flex items-center gap-2">
                                  <div className="w-20 bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{ width: `${poll.totalVotes > 0 ? (poll.votes[index] / poll.totalVotes) * 100 : 0}%` }}></div></div>
                                  <span className="text-sm text-gray-600">{poll.votes[index]}</span>
                                </div>
                              )}
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Closes on: {new Date(poll.closesOn).toLocaleDateString()}</span>
                      <span>Total votes: {poll.totalVotes}</span>
                    </div>
                    {poll.hasVoted && <div className="mt-2 text-sm text-green-600 font-medium">✓ You have voted on this poll</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Polls;
