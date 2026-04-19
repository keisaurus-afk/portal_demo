"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminEnrolleeDetailsPage() {
  const router = useRouter();

  const [enrollee, setEnrollee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEnrollee({
        id: 1,
        firstName: "Jb",
        lastName: "Ramirez",
        email: "jb.ramirez@gmail.com",
        phone: "+63996752389",
        applicantId: "APP2024001",
        program: "Information and Communication Technology",
        applicationStatus: "Pending",
        dateOfBirth: "2002-05-15",
        gender: "Male",
        nationality: "Filipino",
        address: "123 Wakas st. Kawit, Cavite",
        highSchool: "Emiliano Tria Tirona Memorial National Integrated High School",
        graduationYear: "2020",
        gpa: "1.66",
        emergencyContact: "Sarah Ramirez - +1 (555) 987-6543",
        applicationDate: "2024-01-15",
        preferredStartDate: "2024-09-01",
        specialNeeds: "None",
      });
      setLoading(false);
    }, 500);
  }, []);

  const handleInputChange = (field, value) => {
    setEnrollee((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saved:", enrollee);
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <button onClick={() => router.back()} className="text-gray-600">
            ← Back to Enrollees
          </button>

          <div className="flex gap-3">

            <span className={`px-3 py-1 rounded-full text-sm ${
              enrollee.applicationStatus === "Pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-green-100 text-green-800"
            }`}>
              {enrollee.applicationStatus}
            </span>

            {isEditing ? (
              <>
                <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded-lg">
                  Save
                </button>
                <button onClick={() => setIsEditing(false)} className="bg-gray-600 text-white px-4 py-2 rounded-lg">
                  Cancel
                </button>
              </>
            ) : (
              <button onClick={() => setIsEditing(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Edit Application
              </button>
            )}

          </div>
        </div>

        {/* PROFILE HEADER */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-6 rounded-xl">
          <h1 className="text-3xl font-bold">
            {enrollee.firstName} {enrollee.lastName}
          </h1>
          <p>{enrollee.program} • GPA {enrollee.gpa}</p>
          <p className="text-sm">Applicant ID: {enrollee.applicantId}</p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            <Card title="Personal Information">
              <Grid>
                <Field label="Email" value={enrollee.email} isEditing={isEditing} onChange={(v)=>handleInputChange("email", v)} />
                <Field label="Phone" value={enrollee.phone} isEditing={isEditing} onChange={(v)=>handleInputChange("phone", v)} />
                <Field label="Date of Birth" value={enrollee.dateOfBirth} isEditing={isEditing} onChange={(v)=>handleInputChange("dateOfBirth", v)} />
                <Field label="Gender" value={enrollee.gender} isEditing={isEditing} onChange={(v)=>handleInputChange("gender", v)} />
                <Field label="Nationality" value={enrollee.nationality} isEditing={isEditing} onChange={(v)=>handleInputChange("nationality", v)} />
              </Grid>
            </Card>

            <Card title="Academic Information">
              <Grid>
                <Field label="Program" value={enrollee.program} isEditing={isEditing} onChange={(v)=>handleInputChange("program", v)} />
                <Field label="High School" value={enrollee.highSchool} isEditing={isEditing} onChange={(v)=>handleInputChange("highSchool", v)} />
                <Field label="Graduation Year" value={enrollee.graduationYear} isEditing={isEditing} onChange={(v)=>handleInputChange("graduationYear", v)} />
                <Field label="GPA" value={enrollee.gpa} isEditing={isEditing} onChange={(v)=>handleInputChange("gpa", v)} />
              </Grid>
            </Card>

            <Card title="Address">
              <Field value={enrollee.address} isEditing={isEditing} onChange={(v)=>handleInputChange("address", v)} />
            </Card>

            <Card title="Emergency Contact">
              <Field value={enrollee.emergencyContact} isEditing={isEditing} onChange={(v)=>handleInputChange("emergencyContact", v)} />
            </Card>

          </div>

          {/* RIGHT Sections*/}
          <div className="space-y-6">

            <Card title="Application Details">
              <Field label="Status" value={enrollee.applicationStatus} isEditing={isEditing} onChange={(v)=>handleInputChange("applicationStatus", v)} />
              <Field label="Application Date" value={enrollee.applicationDate} isEditing={isEditing} onChange={(v)=>handleInputChange("applicationDate", v)} />
              <Field label="Start Date" value={enrollee.preferredStartDate} isEditing={isEditing} onChange={(v)=>handleInputChange("preferredStartDate", v)} />
              <Field label="Special Needs" value={enrollee.specialNeeds} isEditing={isEditing} onChange={(v)=>handleInputChange("specialNeeds", v)} />
            </Card>

            

            {/* FILES */}
            <Card title="Requirements / Files">

              <FileItem name="Birth Certificate.pdf" status="Uploaded" />
              <FileItem name="High School Diploma.pdf" status="Uploaded" />
              <FileItem name="Form137.pdf" status="Pending" />

            </Card>

            {/* QUICK ACTIONS MOVED TO BOTTOM */}
            <Card title="Quick Actions">

              <div className="grid grid-cols-2 gap-3">

                <button className="bg-green-100 text-green-700 py-2 px-4 rounded-lg hover:bg-green-200 text-sm font-medium">
                  Accept Application
                </button>

                <button className="bg-red-100 text-red-700 py-2 px-4 rounded-lg hover:bg-red-200 text-sm font-medium">
                  Reject Application
                </button>

              </div>

            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

function Card({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="font-semibold text-lg">{title}</h2>
      {children}
    </div>
  );
}

function Grid({ children }) {
  return <div className="grid md:grid-cols-2 gap-4">{children}</div>;
}

function Field({ label, value, isEditing, onChange }) {
  return (
    <div>
      {label && <label className="text-sm text-gray-500">{label}</label>}
      {isEditing ? (
        <input
          value={value}
          onChange={(e)=>onChange(e.target.value)}
          className="w-full border px-3 py-2 rounded-md"
        />
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
}

function FileItem({ name, status }) {
  return (
    <div className="flex justify-between items-center border p-3 rounded-lg">
      <span className="text-sm">{name}</span>
      <span className={`text-xs px-2 py-1 rounded-full ${
        status === "Uploaded"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}>
        {status}
      </span>
    </div>
  );
}