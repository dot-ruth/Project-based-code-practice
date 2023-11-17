using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace webAPI.Models
{
    public partial class Employee
    {
        [Key]
        public int EmployeeId { get; set; }
        public string? EmployeeName { get; set; }
        public string? Department { get; set; }
        public DateTime? DateOfJoining { get; set; }
        public string? Photofilename { get; set; }
    }
}
