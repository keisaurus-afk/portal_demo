"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ApplicantData {
  id: number;
  studentNumber: string;
  applicationStatus: string;
  applicationDate: string;
  preferredStartDate: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  desiredProgram: string;
  applicantType: string;
  gradeLevel?: string; 
  lrn: string;
  lastSchoolName: string;
  lastSchoolType?: string;
  streetAddress: string;
  city: string;
  stateProvince: string;
  zipCode: string;
  country: string;
  personalStatement: string;
  emergencyContactName: string;
  emergencyContactRelationship: string;
  emergencyContactPhone: string;
  portalPassword?: string;
  securityAnswer: string;
}

export default function AdminApplicantDetailsPage() {
  const router = useRouter();

  const [applicant, setApplicant] = useState<ApplicantData | null>(null);
  const [loading, setLoading] = useState(true);
  
  // States for Functionality
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [formData, setFormData] = useState<ApplicantData | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const mockData = {
        id: 1,
        studentNumber: "20260001",
        applicationStatus: "Pending",
        applicationDate: "2026-01-15",
        preferredStartDate: "2026-09-01",
        firstName: "Jb",
        middleName: "",
        lastName: "Ramirez",
        email: "jb.ramirez@gmail.com",
        phone: "+63996752389",
        dateOfBirth: "2002-05-15",
        gender: "Male",
        nationality: "Filipino",
        desiredProgram: "Information and Communication Technology",
        applicantType: "Transferee",
        gradeLevel: "Grade 11",
        lrn: "123456789012",
        lastSchoolName: "Emiliano Tria Tirona Memorial National Integrated High School",
        lastSchoolType: "Public High School",
        streetAddress: "123 Wakas st.",
        city: "Kawit",
        stateProvince: "Cavite",
        zipCode: "4104",
        country: "Philippines",
        personalStatement: "I am passionate about learning software architecture and systems design at SGCST.",
        emergencyContactName: "Maria Ramirez",
        emergencyContactRelationship: "Mother",
        emergencyContactPhone: "+63996752390",
        portalPassword: "TempPassword2026!",
        securityAnswer: "Wakas High School",
      };
      setApplicant(mockData);
      setFormData(mockData);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (key: keyof ApplicantData, value: string) => {
    if (formData) {
      setFormData({ ...formData, [key]: value });
    }
  };

  const handleSaveChanges = () => {
    if (formData) {
      setApplicant(formData);
      setIsEditing(false);
      console.log("Saved Data:", formData);
    }
  };

  const handleCancel = () => {
    setFormData(applicant);
    setIsEditing(false);
  };

  const handleViewFile = (fileName: string) => {
    alert(`Opening preview for: ${fileName}`);
  };

  const handleUploadFile = (fileName: string) => {
    // Implement your file picker trigger logic here
    alert(`Triggering file upload dialog for: ${fileName}`);
  };

  if (loading || !applicant || !formData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Application...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header Action Row */}
        <div className="flex justify-between items-center">
          <button onClick={() => router.back()} className="text-gray-600 transition-colors hover:text-gray-900 font-medium">
            ← Back to Applicants
          </button>

          <div className="flex items-center gap-3">
            {isEditing ? (
              <>
                <button 
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-700 py-1.5 px-4 rounded-lg hover:bg-gray-300 text-sm font-semibold transition-colors standard-shadow"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSaveChanges}
                  className="bg-green-600 text-white py-1.5 px-4 rounded-lg hover:bg-green-700 text-sm font-semibold transition-colors shadow-sm"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button 
                onClick={() => setIsEditing(true)}
                className="bg-indigo-50 text-indigo-700 border border-indigo-200 py-1.5 px-4 rounded-lg hover:bg-indigo-100 text-sm font-semibold transition-colors shadow-sm"
              >
                Edit Information
              </button>
            )}
            <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center ${
              applicant.applicationStatus === "Pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-green-100 text-green-800"
            }`}>
              {applicant.applicationStatus}
            </span>
          </div>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-6 rounded-xl shadow-sm">
          <h1 className="text-3xl font-bold">
            {applicant.firstName} {applicant.middleName ? `${applicant.middleName} ` : ""}{applicant.lastName}
          </h1>
          <p className="mt-1 font-light">{applicant.desiredProgram}</p>
          <p className="text-xs mt-2 opacity-80">Student Number: {applicant.studentNumber}</p>
        </div>

        {/* Grid Layout Container */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Main Form Fields Column */}
          <div className="lg:col-span-2 space-y-6">
            
            <Card title="Personal Information">
              <Grid>
                <Field label="First Name" value={formData.firstName} isEditing={isEditing} onChange={(val) => handleInputChange("firstName", val)} />
                <Field label="Middle Name" value={formData.middleName || ""} isEditing={isEditing} onChange={(val) => handleInputChange("middleName", val)} />
                <Field label="Last Name" value={formData.lastName} isEditing={isEditing} onChange={(val) => handleInputChange("lastName", val)} />
                <Field label="Email Address" value={formData.email} isEditing={isEditing} onChange={(val) => handleInputChange("email", val)} />
                <Field label="Phone Number" value={formData.phone} isEditing={isEditing} onChange={(val) => handleInputChange("phone", val)} />
                <Field label="Date of Birth" value={formData.dateOfBirth} isEditing={isEditing} onChange={(val) => handleInputChange("dateOfBirth", val)} />
                <Field label="Gender" value={formData.gender} isEditing={isEditing} onChange={(val) => handleInputChange("gender", val)} />
                <Field label="Nationality" value={formData.nationality} isEditing={isEditing} onChange={(val) => handleInputChange("nationality", val)} />
              </Grid>
            </Card>

            <Card title="Emergency Contact Details">
              <Grid>
                <Field label="Contact Person Name" value={formData.emergencyContactName} isEditing={isEditing} onChange={(val) => handleInputChange("emergencyContactName", val)} />
                <Field label="Relationship" value={formData.emergencyContactRelationship} isEditing={isEditing} onChange={(val) => handleInputChange("emergencyContactRelationship", val)} />
                <div className="md:col-span-2">
                  <Field label="Emergency Contact Phone Number" value={formData.emergencyContactPhone} isEditing={isEditing} onChange={(val) => handleInputChange("emergencyContactPhone", val)} />
                </div>
              </Grid>
            </Card>

            <Card title="Academic History & Intake Goals">
              <Grid>
                <Field label="Desired Program/Strand" value={formData.desiredProgram} isEditing={isEditing} onChange={(val) => handleInputChange("desiredProgram", val)} />
                <Field label="Enrollment Type" value={formData.applicantType} isEditing={isEditing} onChange={(val) => handleInputChange("applicantType", val)} />
                {formData.applicantType === "Transferee" && (
                  <Field label="Grade Level" value={formData.gradeLevel || ""} isEditing={isEditing} onChange={(val) => handleInputChange("gradeLevel", val)} />
                )}
                <Field label="Learner Reference Number (LRN)" value={formData.lrn} isEditing={isEditing} onChange={(val) => handleInputChange("lrn", val)} />
                <Field label="Last School Attended" value={formData.lastSchoolName} isEditing={isEditing} onChange={(val) => handleInputChange("lastSchoolName", val)} />
                <Field label="Last School Attended Type " value={formData.lastSchoolType || ""} isEditing={isEditing} onChange={(val) => handleInputChange("lastSchoolType", val)} />
              </Grid>
            </Card>

            <Card title="Address Details">
              <Grid>
                <div className="md:col-span-2">
                  <Field label="Street Address" value={formData.streetAddress} isEditing={isEditing} onChange={(val) => handleInputChange("streetAddress", val)} />
                </div>
                <Field label="City / Municipality" value={formData.city} isEditing={isEditing} onChange={(val) => handleInputChange("city", val)} />
                <Field label="State / Province" value={formData.stateProvince} isEditing={isEditing} onChange={(val) => handleInputChange("stateProvince", val)} />
                <Field label="Zip / Postal Code" value={formData.zipCode} isEditing={isEditing} onChange={(val) => handleInputChange("zipCode", val)} />
                <Field label="Country" value={formData.country} isEditing={isEditing} onChange={(val) => handleInputChange("country", val)} />
              </Grid>
            </Card>
          </div>

          {/* Sidebar Modules Column */}
          <div className="space-y-6">
            <Card title="Student Portal Security">
              <div className="space-y-4">
                
                {/* Security Question Answer Field Row */}
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Security Question Answer
                  </label>
                  <div className="flex items-center justify-between bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                    {isEditing ? (
                      <input 
                        type="text"
                        value={formData.securityAnswer}
                        onChange={(e) => handleInputChange("securityAnswer", e.target.value)}
                        className="font-semibold text-gray-800 text-sm bg-transparent border-none outline-none w-full"
                      />
                    ) : (
                      <p className="font-semibold text-gray-800 text-sm tracking-wide">
                        {showAnswer ? formData.securityAnswer : "••••••••"}
                      </p>
                    )}
                    
                    {!isEditing && (
                      <button 
                        onClick={() => setShowAnswer(!showAnswer)}
                        className="text-xs text-indigo-600 hover:text-indigo-800 font-bold px-2"
                      >
                        {showAnswer ? "Hide" : "Show"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Password Field Row */}
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Temporary Portal Password
                  </label>
                  <div className="flex items-center justify-between bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                    {isEditing ? (
                      <input 
                        type="text"
                        value={formData.portalPassword || ""}
                        onChange={(e) => handleInputChange("portalPassword", e.target.value)}
                        className="font-semibold text-gray-800 text-sm bg-transparent border-none outline-none w-full"
                      />
                    ) : (
                      <p className="font-semibold text-gray-800 text-sm tracking-wide">
                        {showPassword ? formData.portalPassword : "••••••••"}
                      </p>
                    )}
                    
                    {!isEditing && (
                      <button 
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-xs text-indigo-600 hover:text-indigo-800 font-bold px-2"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    )}
                  </div>
                </div>

                <p className="text-[10px] text-gray-400 italic pt-1">
                  Note: These credentials manage portal recovery paths and temporary systemic authentication loops.
                </p>
              </div>
            </Card>

            <Card title="Personal Statement Insights">
              {isEditing ? (
                <textarea 
                  value={formData.personalStatement}
                  onChange={(e) => handleInputChange("personalStatement", e.target.value)}
                  className="w-full text-xs text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-200 outline-none h-28 focus:border-indigo-400"
                />
              ) : (
                <div className="text-xs text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-100 italic leading-relaxed">
                  {formData.personalStatement}
                </div>
              )}
            </Card>

            <Card title="Admission Files Verification">
              <div className="space-y-2">
                {/* Appended state modifiers down into runtime FileItem evaluations */}
                <FileItem 
                  name="Report Card / Transcript" 
                  status="Uploaded" 
                  isEditing={isEditing}
                  onView={() => handleViewFile("Report Card / Transcript")} 
                />
                <FileItem 
                  name="PSA Birth Certificate" 
                  status="Uploaded" 
                  isEditing={isEditing}
                  onView={() => handleViewFile("PSA Birth Certificate")} 
                />
                <FileItem 
                  name="Good Moral Certificate" 
                  status="Pending" 
                  isEditing={isEditing}
                  onUpload={() => handleUploadFile("Good Moral Certificate")}
                />
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
      <h2 className="font-bold text-gray-800 border-b pb-2 tracking-wide uppercase text-xs text-slate-400">{title}</h2>
      {children}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid md:grid-cols-2 gap-4">{children}</div>;
}

function Field({ 
  label, 
  value, 
  isEditing, 
  onChange 
}: { 
  label?: string; 
  value: string; 
  isEditing?: boolean;
  onChange?: (val: string) => void;
}) {
  return (
    <div>
      {label && <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">{label}</label>}
      {isEditing && onChange ? (
        <input 
          type="text" 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          className="w-full font-semibold text-gray-800 text-sm border border-gray-200 rounded px-2 py-1 bg-gray-50/50 outline-none focus:border-indigo-400"
        />
      ) : (
        <p className="font-semibold text-gray-800 text-sm min-h-[20px] px-1">{value || "—"}</p>
      )}
    </div>
  );
}

// Updated FileItem component to support conditional rendering based on editing state
function FileItem({ 
  name, 
  status,
  isEditing,
  onView,
  onUpload
}: { 
  name: string; 
  status: "Uploaded" | "Pending"; 
  isEditing: boolean;
  onView?: () => void;
  onUpload?: () => void;
}) {
  return (
    <div className="flex justify-between items-center border border-gray-100 p-3 rounded-lg bg-gray-50/40">
      <span className="text-xs font-medium text-gray-700">{name}</span>
      
      {status === "Uploaded" ? (
        <button 
          onClick={onView}
          className="text-[11px] uppercase font-bold tracking-wider text-indigo-600 hover:text-indigo-800 hover:underline px-2 py-0.5"
        >
          View File
        </button>
      ) : isEditing && onUpload ? (
        /* If editing and file is pending, display interactive upload path action link */
        <button 
          onClick={onUpload}
          className="text-[11px] uppercase font-bold tracking-wider text-green-600 hover:text-green-800 hover:underline px-2 py-0.5"
        >
          Upload File
        </button>
      ) : (
        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-gray-100 text-gray-400">
          Missing / Pending
        </span>
      )}
    </div>
  );
}