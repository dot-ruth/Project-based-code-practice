using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace webAPI.Models
{
    public partial class employeeDBContext : DbContext
    {
        public employeeDBContext()
        {
        }

        public employeeDBContext(DbContextOptions<employeeDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Department> Departments { get; set; } = null!;
        public virtual DbSet<Employee> Employees { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=.;database=employeeDB;trusted_connection=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Department>(entity =>
            {
                //entity.HasNoKey();

                entity.ToTable("Department");

                entity.Property(e => e.DepartmentId).ValueGeneratedOnAdd();

                entity.Property(e => e.DepartmentName)
                    .HasMaxLength(500)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                //entity.HasNoKey();

                entity.ToTable("Employee");

                entity.Property(e => e.DateOfJoining).HasColumnType("date");

                entity.Property(e => e.Department)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.EmployeeId).ValueGeneratedOnAdd();

                entity.Property(e => e.EmployeeName)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Photofilename)
                    .HasMaxLength(500)
                    .IsUnicode(false)
                    .HasColumnName("photofilename");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
