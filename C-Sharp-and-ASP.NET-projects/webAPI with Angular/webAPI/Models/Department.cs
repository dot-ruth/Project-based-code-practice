using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace webAPI.Models
{
    public partial class Department
    {
        [Key]
        public int DepartmentId { get; set; }
        public string? DepartmentName { get; set; }
    }
}
